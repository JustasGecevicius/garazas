import { LabelledInput } from "../../Inputs/LabelledInput"

type Props ={
    make?: string,
    vin_code?: string,
    engine?: string,
    last_odometer?: string,
    type?: string,
    production_year?:string,
}
export function Info(props: Props) {
  const {
    make,
    vin_code,
    engine,
    last_odometer,
    type,
    production_year,
  } = props;
  return <div className="w-full outline outline-white grow-1 rounded-md px-2">
    <LabelledInput title="make" value={make}/>
    <LabelledInput title="vin_code" value={vin_code}/>
    <LabelledInput title="engine" value={engine}/>
    <LabelledInput title="last_odometer" value={last_odometer}/>
    <LabelledInput title="type" value={type}/>
    <LabelledInput title="production_year" value={production_year}/>
  </div>
}