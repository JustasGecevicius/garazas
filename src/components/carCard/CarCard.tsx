import { BasePicture } from "../EditCarComponents/PicturesSection/Picture";
import NavigateButton from "../buttons/NavigateButton";

type Props = {
  car: any;
};

export function CarCard({ car }: Props) {
  return (
    <div className="flex-col items-center content-start flex-auto px-5 border-2 border-white py-5 rounded-2xl gap-2">
      <div className="flex-row items-center justify-between flex-auto w-full gap-4">
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
        <NavigateButton to={`edit-vehicle/${car?.id}`} />
      </div>
      <BasePicture picture={car?.VehiclePhotos?.[0]} />
    </div>
  );
}
