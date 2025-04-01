import { useQuery } from "react-query";
import { CarCard } from "../components/carCard/CarCard";
import { useSelector } from "react-redux";
import { selectVehicleListRefetchToggle } from "../redux/slices/vehicleListRefetchSlice";

export default function Dashboard() {
  const vehicleListToggle = useSelector(selectVehicleListRefetchToggle);

  const { data: cars } = useQuery({
    queryKey: ["vehicle_list", vehicleListToggle],
    queryFn: async ({ queryKey }) => {
      const response = await window.select.selectPaginatedVehicles({
        page: 1,
        limit: 3,
        include: ["VehiclePhoto"],
      });
      return response;
    },
  });

  return (
    <div className="">
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2.5 ">
        {cars?.data?.slice(0, 9).map((car) => (
          <CarCard key={car?.id} car={car} />
        ))}
      </div>
    </div>
  );
}
