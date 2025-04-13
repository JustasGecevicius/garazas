import { useQuery } from "react-query";
import { EditCarType } from "../App";
import { Info } from "../components/EditCarComponents/InfoSection/Info";
import { CarPictures } from "../components/EditCarComponents/PicturesSection/CarPictures";
import { RepairHistory } from "../components/EditCarComponents/RepairHistorySection/RepairHistory";
import { useParams } from "react-router";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectImageListRefetchToggle,
  selectTaskListRefetchToggle,
  toggleImageListRefetchState,
} from "../redux/slices/vehicleListRefetchSlice";
import { SaveButton } from "../components/buttons/SaveButton";

type Props = {} & EditCarType;

export default function VehicleEdit(props: Props) {
  const { id } = useParams();

  const dispatch = useDispatch();

  const dataRef = useRef<{ [key: string]: any }>({});
  const taskListToggle = useSelector(selectTaskListRefetchToggle);
  const imageListToggle = useSelector(selectImageListRefetchToggle);

  const { data, error, isFetching } = useQuery({
    queryKey: ["edit-vehicle", id, taskListToggle, imageListToggle],
    queryFn: async () => {
      const response = await window.select.selectVehicle(id, {
        include: ["Task", "VehiclePhoto"],
      });
      console.log("REPONSE", response);
      return response;
    },
  });

  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  function handleSave() {
    window.update.updateVehicle(dataRef.current);
  }

  const vehicleImageCreateMethod = useCallback(
    (blobString: string, blobType: string) => {
      window.create.createVehicleImage({
        photoBlob: { data: blobString, type: blobType },
        VehicleId: data?.id,
      });
    },
    [data?.id]
  );

  const vehicleImageDeleteMethod = useCallback((id: number) => {
    if ((id * 2) % 2 === 0) {
      window.delete.deleteVehicleImage(id);
      dispatch(toggleImageListRefetchState());
    }
  }, []);

  return (
    <div className="flex w-full h-full justify-center items-center grow">
      <div className="flex-row gap-3 grow">
        <div className="flex-col gap-5">
          <div className="flex-col p-2 gap-5 max-w-80">
            <p className="text-2xl">{data ? data.name : "No name available"}</p>
            <CarPictures
              images={data?.VehiclePhotos}
              dataRef={dataRef}
              createMethod={vehicleImageCreateMethod}
              deleteMethod={vehicleImageDeleteMethod}
            />
          </div>
        </div>
        <div className="flex-col gap-5 p-2 grow w-full">
          <div className="flex-row justify-between">
            <div className="text-2xl">Duomenys</div>
            <SaveButton handleSave={handleSave} />
          </div>
          <Info data={data} dataRef={dataRef} />
          <div className="text-2xl">Remontai</div>
          <RepairHistory data={data} dataRef={dataRef} />
        </div>
      </div>
    </div>
  );
}
