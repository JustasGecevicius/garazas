import { useId, useState } from "react"

type Props = {
  title: string
  value?: string,
}

export function LabelledInput(props: Props) {
  const {title, value: propValue} = props;
  const [value, setValue] = useState(propValue || '');
  const inputId = useId();
  return <div className="flex flex-col gap-1">
    <label htmlFor={inputId}>{title}</label>
    <input className='rounded-md' type="text" id={inputId} value={value} onChange={(e) => setValue(e.target.value)}/>
  </div>
}