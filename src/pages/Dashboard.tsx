import { CarCard } from '../components/carCard/CarCard';

export function Dashboard() {
  const cars = [undefined, undefined, undefined];
  return (
    <div className='flex flex-col items-center w-full gap-1'>
      <div className='flex flex-row justify-center w-full gap-1'>
        {cars?.map((car) => (
          <CarCard
            car={car}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
}
