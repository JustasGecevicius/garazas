import { MutableRefObject, useEffect } from "react";
import { LabelledInput, LabelledInputWrapper } from "../../Inputs/LabelledInput"
import { NumberInput } from "../../Inputs/NumberInput";
import { TextInput } from "../../Inputs/TextInput";
import VehicleTypeSelect from "../../selects/VehicleTypeSelect";
import { DateInput } from "../../Inputs/DateInput";
import FuelTypeSelect from "../../selects/FuelTypeSelect";
import EngineSizeMeasurementTypeSelect from "../../selects/EngineTypeSelect";

type Props ={
    data: {
    make?: string,
    vin_code?: string,
    engine_size?: string,
    odometer?: string,
    type?: string,
    production_year?:string,
    }
    dataRef?: MutableRefObject<{ [key: string]: any }>;
    plate_number?: string;
    note?: string,
    tech_inspection_due_date?: string,
    fabrication_year?: string,
    engine_size_measurement_type?: string,
}
export function Info(props: Props) {
  const { data, dataRef } = props;

  const {
    make,
    vin_code,
    engine_size,
    odometer,
    type,
    production_year,
    fuel_type_id,
    vehicle_type_id,
    client_id,
    plate_number,
    note,
    tech_inspection_due_date,
    fabrication_year,
    engine_size_measurement_type,
  } = data || {};

  useEffect(() => {
    console.log('DATAl', data)
  }, [data]);
  
  return <div className="w-full outline outline-white grow-1 rounded-md px-2">
    <LabelledInputWrapper title="make">
      <TextInput name="make" dataRef={dataRef} value={make}/>
    </LabelledInputWrapper>
    <LabelledInputWrapper title="vin_code">
      <TextInput name="vin_code" dataRef={dataRef} value={vin_code}/>
    </LabelledInputWrapper>
    <LabelledInputWrapper title="engine_size">
      <NumberInput name='engine_size' dataRef={dataRef} value={engine_size} />
    </LabelledInputWrapper>
    <LabelledInputWrapper title="odometer">
      <NumberInput name='odometer' dataRef={dataRef} value={odometer} />
    </LabelledInputWrapper>
    <LabelledInputWrapper title="vehicle_type">
      <VehicleTypeSelect dataRef={dataRef} value={type}/>
    </LabelledInputWrapper>
    <LabelledInputWrapper title="production_year">
      <DateInput name="production_year" dataRef={dataRef} value={production_year}/>
    </LabelledInputWrapper>
    <LabelledInputWrapper title="fuel_type">
      <FuelTypeSelect dataRef={dataRef} value={fuel_type_id}/>
    </LabelledInputWrapper>
    <LabelledInputWrapper title="engine_size_measurement_type">
      <EngineSizeMeasurementTypeSelect dataRef={dataRef} value={engine_size_measurement_type }/>
    </LabelledInputWrapper>
    <LabelledInputWrapper title="vehicle_type">
      <VehicleTypeSelect dataRef={dataRef} value={vehicle_type_id}/>
    </LabelledInputWrapper>
    <LabelledInputWrapper title="plate_number">
      <TextInput name="plate_number" dataRef={dataRef} value={plate_number}/>
    </LabelledInputWrapper>
    <LabelledInputWrapper title="note">
      <TextInput name="note" dataRef={dataRef} value={note}/>
    </LabelledInputWrapper>
    <LabelledInputWrapper title="tech_inspection_due_date">
      <DateInput name="tech_inspection_due_date" dataRef={dataRef} value={tech_inspection_due_date}/>
    </LabelledInputWrapper>
    <LabelledInputWrapper title="fabrication_year">
      <DateInput name="fabrication_year" dataRef={dataRef} value={fabrication_year}/>
    </LabelledInputWrapper>
  </div>
}