import { CarCard } from "../components/carCard/CarCard";

export function Dashboard() {
  const cars = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ];
  return (
    <div className="flex flex-col justify-items-start w-full gap-2">
      <div className="flex flex-wrap justify-items-start w-full gap-2">
        {cars?.slice(0, 9).map((car) => (
          <CarCard car={car} key={Math.random()} />
        ))}
      </div>
    </div>
  );
}
