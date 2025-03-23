import { MutableRefObject, useEffect, useState } from "react";

export type TextInputPropsType = {
  name: string;
  value?: string;
  dataRef?: MutableRefObject<{ [key: string]: any }>;
};

export function TextInput(props: TextInputPropsType) {
  const { name, value: propValue, dataRef } = props;
  const [value, setValue] = useState(propValue || "");

  useEffect(() => {
    if (!dataRef) return;
    dataRef.current = {
      ...dataRef.current,
      [name]: value,
    };
  }, [name, value]);

  useEffect(() => {
    setValue(propValue || null);
  }, [propValue]);

  return (
    <input
      className="flex col-span-2 border rounded-md text-black bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600"
      type="text"
      value={value}
      placeholder={name}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
