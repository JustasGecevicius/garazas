import { CarCard } from '../components/CarCard';

export function Dashboard() {

  const cars = [undefined, undefined, undefined];
  return (
    <div className='w-full flex flex-col gap-1 items-center'>
      <div className='flex flex-row gap-1 w-full justify-center'>
      {cars?.map((car) => (
        <CarCard car={car} />
      ))}
      </div>
    </div>
  );
}
