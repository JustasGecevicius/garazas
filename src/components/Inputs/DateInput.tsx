import { MutableRefObject, useEffect, useState } from "react";

export type DateInputPropsType = {
  name: string;
  value?: string | Date;
  dataRef?: MutableRefObject<{ [key: string]: any }>;
};

export function DateInput(props: DateInputPropsType) {
  const { name, value: propValue, dataRef } = props;
  const [value, setValue] = useState<string>();

  useEffect(() => {
    if (!dataRef) return;
    dataRef.current = {
      ...dataRef.current,
      [name]: value,
    };
  }, [name, value]);

  useEffect(() => {
    if (!propValue) return;
    const date = new Date(propValue);
    const dateString = date.toLocaleDateString("lt-LT");
    setValue(dateString);
  }, [propValue]);

  return (
    <input
      className="flex flex-row border rounded-md text-black bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600"
      type="date"
      placeholder={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
