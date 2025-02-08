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
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2.5 ">
        {cars?.slice(0, 9).map((car) => (
          <CarCard car={car} key={Math.random()} />
        ))}
      </div>
    </div>
  );
}
