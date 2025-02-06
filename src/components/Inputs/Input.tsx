import { MutableRefObject, useEffect, useState } from "react"

export type InputPropsType = {
  name: string
  value?: string,
  dataRef?: MutableRefObject<{ [key: string]: any }>;
  type?: string;
}

export function Input(props: InputPropsType) {
  const {name, value: propValue, dataRef, type} = props;
  const [value, setValue] = useState(propValue || '');

  useEffect(() => {
    if (!dataRef) return;
    dataRef.current = {
        ...dataRef.current,
        [name]: value
    }
  }, [name, value]);

  return <input className='rounded-md' type={type} placeholder={name} value={value} onChange={(e) => setValue(e.target.value)}/>
}