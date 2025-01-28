import { MutableRefObject, useEffect, useState } from "react";

export type DateInputPropsType = {
  name: string
  value?: string,
  dataRef?: MutableRefObject<{ [key: string]: any }>;
}

export function DateInput(props: DateInputPropsType) {
  const {name, value: propValue, dataRef } = props;
  const [value, setValue] = useState(propValue || '');

  useEffect(() => {
    if (!dataRef) return;
    dataRef.current = {
        ...dataRef.current,
        [name]: value
    }
  }, [name, value]);

  return <input className='rounded-md' type="date" placeholder={name} value={value} onChange={(e) => setValue(e.target.value)}/>
}