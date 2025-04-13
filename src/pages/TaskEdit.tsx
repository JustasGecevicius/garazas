import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router";
import { TextInput } from "../components/Inputs/TextInput";
import { DateInput } from "../components/Inputs/DateInput";
import VehicleSelect from "../components/selects/VehicleSelect";
import { SimpleList } from "../components/lists/SimpleList";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPartListRefetchToggle,
  togglePartListRefetchState,
} from "../redux/slices/partListRefetchSlice";
import { AddNewPartButton } from "../components/buttons/AddNewPartButton";
import { DeleteButton } from "../components/buttons/DeleteButton";
import { CarPictures } from "../components/EditCarComponents/PicturesSection/CarPictures";
import {
  selectTaskRefetchToggle,
  toggleTaskRefetchState,
} from "../redux/slices/vehicleListRefetchSlice";
import { SaveButton } from "../components/buttons/SaveButton";

const TaskEdit = () => {
  const { id } = useParams();

  const dataRef = useRef<{ [key: string]: any }>({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalInstallTime, setTotalInstallTime] = useState(0);

  const { partListToggle } = useSelector(selectPartListRefetchToggle);
  const taskRefetch = useSelector(selectTaskRefetchToggle);

  const PART_KEYS_TO_SHOW = useMemo(() => ["name", "price", "installTime"], []);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["edit-task", id, partListToggle, taskRefetch],
    queryFn: async () => {
      const response = await window.select.selectTask(id, {
        include: ["TaskPhoto", "Part"],
      });
      dataRef.current = response;
      console.log(response);
      return response;
    },
  });

  useEffect(
    function countTotals() {
      if (!data?.Parts) return;
      const totals = data.Parts.reduce(
        (prev, curr) => {
          prev.totalPrice += curr.price;
          prev.totalInstallTime += curr.installTime;
          return prev;
        },
        { totalPrice: 0, totalInstallTime: 0 }
      );
      setTotalPrice(totals.totalPrice);
      setTotalInstallTime(totals.totalInstallTime);
    },
    [data?.Parts]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission logic here
      window.update.updateTask({ ...dataRef.current, PartId: 1 });
    },
    [dataRef]
  );

  const handleDelete = useCallback(() => {
    window.delete.deleteTask(id);
    navigate("/task-list");
  }, [id]);

  const handlePartDelete = useCallback(
    (partId: number) => {
      window.delete.deleteTaskPart(partId);
      dispatch(togglePartListRefetchState());
    },
    [togglePartListRefetchState]
  );

  const taskImageCreateMethod = useMemo(
    () => (blobString: string, blobType: string) => {
      window.create.createTaskImage({
        photoBlob: { data: blobString, type: blobType },
        TaskId: data?.id,
      });
    },
    [data?.id]
  );

  const taskImageDeleteMethod = useMemo(
    () => (id: number) => {
      console.log("ID", id);
      if ((id * 2) % 2 === 0) {
        window.delete.deleteTaskImage(id);
        dispatch(toggleTaskRefetchState());
      }
    },
    [toggleTaskRefetchState]
  );

  return (
    <div className="w-full">
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit} className="flex-col">
        <div className="flex-row gap-2 w-full">
          <div className="flex-col grow gap-2">
            <VehicleSelect dataRef={dataRef} value={data?.VehicleId} />
            <TextInput name="note" dataRef={dataRef} value={data?.note} />
            <DateInput name="taskDate" dataRef={dataRef} value={data?.taskDate} />
            <SimpleList
              elements={data?.Parts}
              keysToShow={PART_KEYS_TO_SHOW}
              handleDelete={handlePartDelete}
            />
            <div className="flex-row">
              <p className="grow">{`totalPrice - ${totalPrice}`}</p>
              <p className="grow">{`totalInstallTime - ${totalInstallTime}`}</p>
            </div>
            <AddNewPartButton taskId={data?.id} />
          </div>
          <div className="flex-col gap-5 max-w-80 grow">
            <CarPictures
              images={data?.TaskPhotos}
              dataRef={dataRef}
              createMethod={taskImageCreateMethod}
              deleteMethod={taskImageDeleteMethod}
            />
          </div>
        </div>
        <div className="flex-row w-full justify-center gap-2">
          <SaveButton />
          <DeleteButton onDelete={handleDelete} />
        </div>
      </form>
    </div>
  );
};

export default TaskEdit;
