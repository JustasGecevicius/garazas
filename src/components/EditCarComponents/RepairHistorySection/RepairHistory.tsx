import { MutableRefObject } from 'react';
import { RepairHistoryItem } from './RepairHistoryItem';

type Props = {
  data: any,
    dataRef?: MutableRefObject<{ [key: string]: any }>;
};

export function RepairHistory(props: Props) {
  const { data } = props;
  const { tasks } = data || {};

  return (
    <div className='w-full p-2 rounded-md grow-1 outline outline-red-900'>
      {tasks?.map((task) => (
        <RepairHistoryItem data={task} />
      ))}
    </div>
  );
}
