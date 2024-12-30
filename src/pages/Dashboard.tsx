import { CarCard } from '../components/carCard/CarCard';
import { BaseModalWrapper } from '../components/modals/BaseModal';

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
      <BaseModalWrapper isOpen={true}></BaseModalWrapper>
    </div>
  );
}
