import { useQuery } from "react-query";
import { EditCarType } from "../App";
import { Info } from "../components/EditCarComponents/InfoSection/Info";
import { CarPictures } from "../components/EditCarComponents/PicturesSection/CarPictures";
import { RepairHistory } from "../components/EditCarComponents/RepairHistorySection/RepairHistory";
import { useParams } from "react-router";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectTaskListRefetchToggle } from "../redux/slices/vehicleListRefetchSlice";
type Props = {} & EditCarType;

export default function VehicleEdit(props: Props) {
  const { id } = useParams();

  const dataRef = useRef<{ [key: string]: any }>({});
  const { taskListToggle } = useSelector(selectTaskListRefetchToggle);

  const { data, error, isFetching } = useQuery({
    queryKey: ["edit-vehicle", id, taskListToggle],
    queryFn: async ({ queryKey }) => {
      const response = await window.select.selectVehicle(id);
      response.tasks = JSON.parse(response.tasks);
      return response;
    },
  });

  useEffect(() => {
    console.log("DATA", data);
    dataRef.current = data;
  }, [data]);

  function handleSave() {
    window.update.updateVehicle(dataRef.current);
  }

  return (
    <div className="flex my-5 flex-col w-full h-full">
      <div className="flex flex-row w-full h-full gap-2">
        <CarPictures data={data} dataRef={dataRef} />
        <Info data={data} dataRef={dataRef} />
        <RepairHistory data={data} dataRef={dataRef} />
      </div>
      <div>
        <button
          onClick={handleSave}
          className="p-2 text-white bg-blue-500 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}
