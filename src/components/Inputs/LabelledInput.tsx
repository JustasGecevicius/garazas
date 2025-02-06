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
    <input className='rounded-md text-black' type="text" id={inputId} value={value} onChange={(e) => setValue(e.target.value)}/>
  </div>
}

export function LabelledInputWrapper(props: {title: string, children: React.ReactNode}) {
  const {title, children} = props;
  const inputId = useId();
  return <div className="flex flex-col gap-1">
    <label htmlFor={inputId}>{title}</label>
    {children}
  </div>
}