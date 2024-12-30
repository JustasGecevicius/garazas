import { RepairHistoryItem } from './RepairHistoryItem';

type Props = {};

export function RepairHistory(props: Props) {
  const repairHistoryList = [{ date: 'nx', note: 'nx' }];

  return (
    <div className='w-full p-2 rounded-md grow-1 outline outline-red-900'>
      {repairHistoryList?.map((repair) => (
        <RepairHistoryItem data={repair} />
      ))}
    </div>
  );
}
