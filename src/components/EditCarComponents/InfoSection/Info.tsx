import { LabelledInput, LabelledInputWrapper } from "../../Inputs/LabelledInput"
import { NumberInput } from "../../Inputs/NumberInput";

type Props ={
    data: {
    make?: string,
    vin_code?: string,
    engine_size?: string,
    last_odometer?: string,
    type?: string,
    production_year?:string,
    }
}
export function Info(props: Props) {
  const { data } = props;

  const {
    make,
    vin_code,
    engine_size,
    last_odometer,
    type,
    production_year,
  } = data || {};


  
  return <div className="w-full outline outline-white grow-1 rounded-md p-2">
    <LabelledInput title="make" value={make}/>
    <LabelledInput title="vin_code" value={vin_code}/>
    <LabelledInputWrapper title="engine_size">
      <NumberInput name='engine_size' value={engine_size} />
    </LabelledInputWrapper>
    <LabelledInput title="last_odometer" value={last_odometer}/>
    <LabelledInput title="type" value={type}/>
    <LabelledInput title="production_year" value={production_year}/>
  </div>
}