export function CarCard({ car }) {
  return (
    <div className='rounded-md flex flex-col gap-1 border-sky-500 border py-1 px-2'>
      <div className='flex flex-row'>
        <div className='flex flex-col grow'>
          <h3 className='text-xl'>AUTO</h3>
          <p className='text-sm'>AUTOXX</p>
        </div>
        <button>
          <img
            alt='ARROW'
            src={'right-arrow.svg'}
            className='h-8 w-8 rounded-full bg-white'></img>
        </button>
      </div>
      <img
        src='fastcar.jpg'
        alt='bolidas'
        className='max-h-16 aspect-auto object-contain'></img>
    </div>
  );
}
