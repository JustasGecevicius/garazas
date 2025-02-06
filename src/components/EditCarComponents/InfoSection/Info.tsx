import { MutableRefObject } from "react";
import { LabelledInputWrapper } from "../../Inputs/LabelledInput"
import { NumberInput } from "../../Inputs/NumberInput";
import { TextInput } from "../../Inputs/TextInput";
import VehicleTypeSelect from "../../selects/VehicleTypeSelect";
import { DateInput } from "../../Inputs/DateInput";
import FuelTypeSelect from "../../selects/FuelTypeSelect";
import EngineSizeMeasurementTypeSelect from "../../selects/EngineTypeSelect";
import { LabelledTextInput } from "../../labeledInputs/LabelledTextInput";
import { LabelledNumberInput } from "../../labeledInputs/LabelledNumberInput";

type Props ={
    data: {
    make?: string,
    vin_code?: string,
    engine_size?: string,
    odometer?: string,
    type?: string,
    production_year?:string,
    plate_number?: string;
    note?: string,
    tech_inspection_due_date?: string,
    fabrication_year?: string,
    engine_size_measurement_type?: string,
    fuel_type_id?: string,
    vehicle_type_id?: string,
    client_id?: string,
    engine_size_measurement_type_id?: string,
    }
    dataRef?: MutableRefObject<{ [key: string]: any }>;
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
    engine_size_measurement_type_id,
  } = data || {};

  return <div className="w-full outline outline-white grow-1 rounded-md px-2">
    <LabelledTextInput name="make" dataRef={dataRef} value={make}/>
    <LabelledTextInput name="vin_code" dataRef={dataRef} value={vin_code}/>
    <LabelledNumberInput name="engine_size" dataRef={dataRef} value={engine_size}/>
    <LabelledNumberInput name="odometer" dataRef={dataRef} value={odometer}/>
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
      <EngineSizeMeasurementTypeSelect dataRef={dataRef} value={engine_size_measurement_type_id }/>
    </LabelledInputWrapper>
    <LabelledInputWrapper title="vehicle_type">
      <VehicleTypeSelect dataRef={dataRef} value={vehicle_type_id}/>
    </LabelledInputWrapper>
    <LabelledTextInput name="plate_number" dataRef={dataRef} value={plate_number}/>
    <LabelledTextInput name="note" dataRef={dataRef} value={note}/>
    <LabelledInputWrapper title="tech_inspection_due_date">
      <DateInput name="tech_inspection_due_date" dataRef={dataRef} value={tech_inspection_due_date}/>
    </LabelledInputWrapper>
    <LabelledInputWrapper title="fabrication_year">
      <DateInput name="fabrication_year" dataRef={dataRef} value={fabrication_year}/>
    </LabelledInputWrapper>
  </div>
}