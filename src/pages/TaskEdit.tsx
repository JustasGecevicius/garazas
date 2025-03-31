import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router";
import { TextInput } from "../components/Inputs/TextInput";
import { DateInput } from "../components/Inputs/DateInput";
import VehicleSelect from "../components/selects/VehicleSelect";
import { FileInput } from "../components/Inputs/FileInput";
import { arrayBufferToBase64, base64ToBlob } from "../utils/imageCodingDecoding";
import { SimpleList } from "../components/lists/SimpleList";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPartListRefetchToggle,
  togglePartListRefetchState,
} from "../redux/slices/partListRefetchSlice";
import { AddNewPartButton } from "../components/buttons/AddNewPartButton";
import { DeleteButton } from "../components/buttons/DeleteButton";

const TaskEdit = () => {
  const { id } = useParams();

  const dataRef = useRef<{ [key: string]: any }>({});
  const imageRef = useRef<HTMLImageElement>(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalInstallTime, setTotalInstallTime] = useState(0);

  const { partListToggle } = useSelector(selectPartListRefetchToggle);

  const [imageURL, setImageURL] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["edit-task", id, partListToggle],
    queryFn: async () => {
      const response = await window.select.selectTask(id, {
        include: ["TaskPhoto", "Part"],
      });
      dataRef.current = response;
      return response;
    },
  });

  useEffect(() => {
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
  }, [data?.Parts]);

  const handleFileChange = async (blob: Blob) => {
    const blobArray = await blob.arrayBuffer();
    const blobString = arrayBufferToBase64(blobArray);
    try {
      window.create.createTaskImage({
        photoBlob: { data: blobString, type: blob.type },
        TaskId: id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    window.update.updateTask({ ...dataRef.current, PartId: 1 });
  };

  useEffect(() => {
    if (data?.TaskPhotos?.[0]?.photoBlob) {
      const blob = base64ToBlob(data.TaskPhotos[0].photoBlob, data.TaskPhotos[0].photoBlobType);
      const url = URL.createObjectURL(blob);
      imageRef.current.src = url;
      setImageURL(url);
    }
  }, [data?.TaskPhotos]);

  const PART_KEYS_TO_SHOW = useMemo(() => ["name", "price", "installTime"], []);

  const handleDelete = useCallback(() => {
    window.delete.deleteTask(id);
    navigate("/task-list");
  }, []);

  const handlePartDelete = useCallback((partId) => {
    window.delete.deleteTaskPart(partId);
    dispatch(togglePartListRefetchState());
  }, []);

  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <VehicleSelect dataRef={dataRef} value={data?.VehicleId} />
        <TextInput name="note" dataRef={dataRef} value={data?.note} />
        <DateInput name="taskDate" dataRef={dataRef} value={data?.taskDate} />
        <FileInput name="taskPhoto" callback={handleFileChange} />
        <SimpleList
          elements={data?.Parts}
          keysToShow={PART_KEYS_TO_SHOW}
          handleDelete={handlePartDelete}
        />
        <button type="submit">Save Task</button>
        <AddNewPartButton taskId={data?.id} />
        <DeleteButton handleDelete={handleDelete} />
        <p>{totalPrice}</p>
        <p>{totalInstallTime}</p>
        <img ref={imageRef} src={imageURL} alt="Uzduoties nuotrauka" />
      </form>
    </div>
  );
};

export default TaskEdit;
