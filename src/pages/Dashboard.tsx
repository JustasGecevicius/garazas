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
    <div className="">
      <div className="flex flex-row flex-wrap items-start content-start gap-3">
        {cars?.slice(0, 9).map((car) => (
          <CarCard car={car} key={Math.random()} />
        ))}
      </div>
    </div>
  );
}
