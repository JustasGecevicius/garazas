import { MutableRefObject, useEffect, useState } from "react";

export type TextInputPropsType = {
  name: string
  value?: string,
  dataRef?: MutableRefObject<{ [key: string]: any }>;
}

export function NumberInput(props: TextInputPropsType) {
  const {name, value: propValue, dataRef } = props;
  const [value, setValue] = useState(propValue || '');

  useEffect(() => {
    if (!dataRef) return;
    dataRef.current = {
        ...dataRef.current,
        [name]: value
    }
  }, [name, value]);

  return <input className='flex flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600' type="number" placeholder={name} value={value} onChange={(e) => setValue(e.target.value)}/>
}