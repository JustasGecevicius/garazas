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
    queryFn: async () => {
      const response = await window.select.selectVehicle(id, {
        include: ["Task"],
      });
      return response;
    },
  });

  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  function handleSave() {
    window.update.updateVehicle(dataRef.current);
  }

  return (
    <div className="flex w-full h-full my-5 justify-center items-center">
      <div className="flex flex-row max-w-[1920px] gap-3">
        <div className="flex flex-col gap-5 w-1/4">
          <div className="flex flex-col p-2 gap-5 ">
            <p className="text-2xl">{data ? data.name : "No name available"}</p>
            <CarPictures data={data} dataRef={dataRef} />
          </div>
        </div>
        <div className="flex flex-col w-3/4 gap-5 p-2">
          <div className="flex flex-row justify-between">
            <div className="text-2xl">Duomenys</div>
            <button onClick={handleSave} className="px-4 text-white bg-blue-500 rounded">
              Save
            </button>
          </div>
          <Info data={data} dataRef={dataRef} />
          <div className="text-2xl">Remontai</div>
          <RepairHistory data={data} dataRef={dataRef} />
        </div>
      </div>
    </div>
  );
}
