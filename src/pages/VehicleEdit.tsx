import { useQuery } from 'react-query';
import { EditCarType } from '../App';
import { Info } from '../components/EditCarComponents/InfoSection/Info';
import { CarPictures } from '../components/EditCarComponents/PicturesSection/CarPictures';
import { RepairHistory } from '../components/EditCarComponents/RepairHistorySection/RepairHistory';
import { useParams } from 'react-router';
import { useEffect } from 'react';
type Props = {} & EditCarType;

export function VehicleEdit(props: Props) {
  const { id } = useParams();

  const { data, error, isFetching } = useQuery({
    queryKey: ['edit-vehicle', id],
    queryFn: async ({ queryKey }) => {
      const response = await window.select.selectVehicle(id);
      return response;
    },
  })
  
  useEffect(() => {
    console.log(data);
  }, [data]);
  
  return (
    <div className='flex flex-row w-full h-full gap-3 my-5'>
      <CarPictures data={data}/>
      <Info data={data}/>
      <RepairHistory data={data}/>
    </div>
  );
}
