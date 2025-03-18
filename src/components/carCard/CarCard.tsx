import { useNavigate } from "react-router";

// @ts-nocheck
type Props = {
  car: any;
};

export function CarCard({ car }: Props) {
  console.log("CAR", car);
  const navigate = useNavigate();
  return (
    <div className="flex flex-row flex-wrap items-center content-start flex-auto px-5 border-2 border-white FrontCard py-7 rounded-2xl">
      <div className="flex flex-row items-center justify-between flex-auto Label">
        <div className="flex flex-col items-start gap-1 Text">
          <h2 className="flex items-center text-2xl font-semibold CarName lg:text-4xl">
            {car?.name}
          </h2>
          <h3 className="flex items-center text-2xl font-semibold CarName lg:text-4xl">
            {car?.model}
          </h3>
          <p className="flex items-center text-lg font-semibold Plate">
            {car?.plate_number}
          </p>
        </div>
        <button
          onClick={() => navigate(`edit-vehicle/${car?.id}`)}
          className="w-[51px] h-[47px]"
        >
          <img
            alt="visit_arrow"
            src={"icons/right-arrow.svg"}
            className="flex flex-col justify-center items-center p-[4px_4px] mx-auto bg-[#ffffff] rounded-2xl"
          ></img>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center flex-auto w-full Wraper min-w-24">
        <img
          src={car?.photo_blob || "Bmw330.png"}
          alt="car_photo"
          className="aspect-auto"
        ></img>
      </div>
    </div>
  );
}
