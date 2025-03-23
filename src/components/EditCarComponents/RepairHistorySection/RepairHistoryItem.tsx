import { useId } from 'react';

type FieldProps = { name?: string; data?: string };

type Props = { data: { date: string; note: string }; onClick: () => void };

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
  const { data, onClick } = props;

  function handleClick(e) {
    e.preventDefault();
    onClick(data);
  }

  return (
    <div
      className='p-2 rounded-md outline outline-white'
      onClick={handleClick}>
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
