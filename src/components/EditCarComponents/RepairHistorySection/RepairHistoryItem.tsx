import { useId } from 'react';

type FieldProps = { name?: string; data?: string };

type Props = { data: { date: string; note: string } };

function HistoryField(props: FieldProps) {
  const id = useId();
  const { data, name } = props;
  return (
    <div>
      <label
        htmlFor={id}
        className='text-sm'>
        {name}
      </label>
      <p
        id={id}
        className='text-xl font-bold'>
        {data}
      </p>
    </div>
  );
}

export function RepairHistoryItem(props: Props) {
  const { data } = props;
  return (
    <div className='p-2 rounded-md outline outline-yellow-500'>
      <HistoryField
        data={data.date}
        name='date'
      />
      <HistoryField
        data={data.note}
        name='notes'
      />
    </div>
  );
}
