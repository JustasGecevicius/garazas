import { useEffect, useId } from "react";

type FieldProps = { name?: string; data?: string };

type Props = { data: { date: string; note: string }; onClick: (x: Props["data"]) => void };

function TaskHistoryField(props: FieldProps) {
  const id = useId();
  const { data, name } = props;
  return (
    <div>
      {!!name && (
        <label htmlFor={id} className="text-sm">
          {name}
        </label>
      )}
      {!!data && (
        <p id={id} className="text-xl font-bold">
          {data}
        </p>
      )}
    </div>
  );
}

export function TaskHistoryItem(props: Props) {
  const { data, onClick } = props;

  function handleClick(e) {
    e.preventDefault();
    onClick(data);
  }

  return (
    <div className="p-2 rounded-md outline outline-white" onClick={handleClick}>
      <TaskHistoryField data={data.date} name="date" />
      <TaskHistoryField data={data.note} name="notes" />
    </div>
  );
}
