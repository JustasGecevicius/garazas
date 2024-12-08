import { EditCarType } from "../App"
import { Info } from "../components/EditCarComponents/InfoSection/Info";
import { CarPictures } from "../components/EditCarComponents/PicturesSection/CarPictures";
import { RepairHistory } from "../components/EditCarComponents/RepairHistorySection/RepairHistory";
type Props = {

} & EditCarType

export function CarEdit(props: Props) {
  const {id} = props;
  return (
    <div className="w-full flex flex-row gap-2 h-full">
      <CarPictures />
      <Info />
      <RepairHistory />
    </div>
  )
}