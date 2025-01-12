import { EditCarType } from '../App';
import { Info } from '../components/EditCarComponents/InfoSection/Info';
import { CarPictures } from '../components/EditCarComponents/PicturesSection/CarPictures';
import { RepairHistory } from '../components/EditCarComponents/RepairHistorySection/RepairHistory';
type Props = {} & EditCarType;

export function VehicleEdit(props: Props) {
  const { id } = props;
  return (
    <div className='flex flex-row w-full h-full gap-2'>
      <CarPictures />
      <Info />
      <RepairHistory />
    </div>
  );
}
