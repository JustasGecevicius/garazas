// @ts-nocheck
type Props = {
  car: any;
};

export function CarCard({ car }: Props) {
  return (
    <div className='flex flex-col w-full gap-1 px-2 py-1 border border-white rounded-md hover:border-sky-500 grow-1'>
      <div className='flex flex-row'>
        <div className='flex flex-col grow'>
          <h3 className='text-xl font-bold'>AUTO</h3>
          <p className='text-sm'>AUTOXX</p>
        </div>
        <button onClick={() => window.delete.deleteCar('1')}>
          <img
            alt='ARROW'
            src={'icons/right-arrow.svg'}
            className='w-8 h-8 bg-white rounded-full'></img>
        </button>
      </div>
      <img
        src='fastcar.jpg'
        alt='bolidas'
        className='object-contain max-h-16 aspect-auto'></img>
    </div>
  );
}
