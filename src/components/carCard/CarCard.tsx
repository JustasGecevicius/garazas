import { useNavigate } from "react-router";
import { BasePicture } from "../EditCarComponents/PicturesSection/Picture";

type Props = {
  car: any;
};

export function CarCard({ car }: Props) {
  const navigate = useNavigate();
  return (
    <div className="flex-col gap-1 items-center content-start flex-auto px-5 border-2 border-white py-7 rounded-2xl">
      <div className="flex-row items-center justify-between flex-auto w-full">
        <div className="flex-col items-start gap-1 ">
          {car?.name && (
            <h2 className="flex items-center text-2xl font-semibold lg:text-4xl">{car?.name}</h2>
          )}
          {car?.model && (
            <h3 className="flex items-center text-2xl font-semibold lg:text-4xl">{car?.model}</h3>
          )}
          {car?.plateNumber && (
            <p className="flex items-center text-lg font-semibold">{car?.plateNumber}</p>
          )}
        </div>
        <button onClick={() => navigate(`edit-vehicle/${car?.id}`)} className="w-[51px] h-[47px]">
          <img
            alt="visit_arrow"
            src={"icons/right-arrow.svg"}
            className="flex-col justify-center items-center p-[4px_4px] mx-auto bg-[#ffffff] rounded-2xl"
          ></img>
        </button>
      </div>
      <BasePicture picture={car?.VehiclePhotos?.[0]} />
    </div>
  );
}
