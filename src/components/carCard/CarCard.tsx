// @ts-nocheck
type Props = {
  car: any;
};

export function CarCard({ car }: Props) {

  return (

    <div className="FrontCard flex flex-auto flex-row flex-wrap items-center content-start px-5 py-7 border-2 border-white rounded-2xl">
      <div className="Label flex flex-auto flex-row justify-between items-center">
        <div className="Text flex flex-col items-start gap-1">
          <h3 className="CarName flex items-center font-semibold text-2xl lg:text-4xl">
            BMW F30 2012
          </h3>
          <p className="Plate flex items-center font-semibold text-lg">
            LGV 021
          </p>
        </div>
        <div className="Arrow">
          <button onClick={() => window.delete.deleteCar("1")}>
            <img
              alt="ARROW"
              src={"icons/right-arrow.svg"}
              className="Arrow flex flex-col justify-center items-center p-[4px_4px] mx-auto w-[51px] h-[47px] bg-[#ffffff] rounded-2xl"
            ></img>
          </button>
        </div>
      </div>
      <div className="Wraper flex flex-auto flex-col justify-center items-center w-full min-w-24">
        <img src="Bmw330.png" alt="bolidas" className="aspect-auto"></img>
      </div>
    </div>

  );
}
