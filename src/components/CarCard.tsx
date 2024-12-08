type Props = {
  car: any
}

export function CarCard({ car }: Props) {
  return (
    <div className='rounded-md flex flex-col gap-1 border-white hover:border-sky-500 border py-1 px-2 grow-1 w-full'>
      <div className='flex flex-row'>
        <div className='flex flex-col grow'>
          <h3 className='text-xl font-bold'>AUTO</h3>
          <p className='text-sm'>AUTOXX</p>
        </div>
        <button>
          <img
            alt='ARROW'
            src={'icons/right-arrow.svg'}
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
