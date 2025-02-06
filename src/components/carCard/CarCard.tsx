// @ts-nocheck
type Props = {
  car: any;
};

export function CarCard({ car }: Props) {
  console.log("AUDI => BMWWWWWWWWWWW");

  return (
    // <div className='flex flex-col w-full gap-1 px-5 py-4 border border-white rounded-md hover:border-sky-500 grow-1'>
    //   <div className='flex flex-row'>
    //     <div className='flex flex-col grow'>
    //       <h3 className='text-xl font-bold'>AUTO</h3>
    //       <p className='text-sm'>AUTOXX</p>
    //     </div>
    //     <button onClick={() => window.delete.deleteCar('1')}>
    //       <img
    //         alt='ARROW'
    //         src={'icons/right-arrow.svg'}
    //         className='w-8 h-8 bg-white rounded-full'></img>
    //     </button>
    //   </div>
    //   <img
    //     src='fastcar.jpg'
    //     alt='bolidas'
    //     className='object-contain max-h-16 aspect-auto'></img>
    // </div>

    // <div className='box-content flex flex-row flex-wrap items-center content-start py-[20px] px-[30px] gap-4 w-full min-w-[400px] border-2 border-white rounded-[25px]'>
    //   <div className='flex flex-row justify-between items-center w-full min-w-[400px] max-w-[550px]'>
    //     <div className='flex flex-col p-0 gap-[8px]'>
    //       <h3 className='font-semibold text-3xl leading-[36px] flex items-center text-white'>AUTO</h3>
    //       <p className='font-normal text-base leading-[16px] flex items-center text-white'>AUTOXX</p>
    //     </div>
    //     <button onClick={() => window.delete.deleteCar('1')}>
    //       <img
    //         alt='ARROW'
    //         src={'icons/right-arrow.svg'}
    //         className='flex flex-col justify-center items-center p-[4px_4px] mx-auto w-[51px] h-[47px] bg-[#ffffff] rounded-full'></img>
    //     </button>
    //   </div>
    //   <div className="flex flex-col justify-center items-center p-[10px] gap-[10px] max-w-[400px]">
    //     <img
    //       src='Bmw330.png'
    //       alt='bolidas'
    //       className='object-contain'>
    //     </img>
    //   </div>
    // </div>

    <div className="FrontCard">
      <div className="Label ">
        <div className="Text">
          <h3 className="CarName flex items-center font-semibold text-4xl">
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
      <div className="Wraper flex flex-col justify-center items-center w-full">
        <img src="Bmw330.png" alt="bolidas" className=""></img>
      </div>
    </div>
  );
}
