import { MutableRefObject, useEffect, useState } from "react";

export type TextInputPropsType = {
  name: string
  value?: string,
  dataRef?: MutableRefObject<{ [key: string]: any }>;
}

export function TextInput(props: TextInputPropsType) {
  const {name, value: propValue, dataRef } = props;
  const [value, setValue] = useState(propValue || '');

  useEffect(() => {
    if (!dataRef) return;
    dataRef.current = {
        ...dataRef.current,
        [name]: value
    }
  }, [name, value]);

  useEffect(() => {
    setValue(propValue || '');
  }, [propValue]);

  return <input className='rounded-md text-black' type="text" value={value} placeholder={name} onChange={(e) => setValue(e.target.value)}/>
}