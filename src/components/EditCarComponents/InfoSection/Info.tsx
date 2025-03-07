import { MutableRefObject } from "react";
import { LabelledInputWrapper } from "../../Inputs/LabelledInput";
import VehicleTypeSelect from "../../selects/VehicleTypeSelect";
import { DateInput } from "../../Inputs/DateInput";
import FuelTypeSelect from "../../selects/FuelTypeSelect";
import EngineSizeMeasurementTypeSelect from "../../selects/EngineTypeSelect";
import { LabelledTextInput } from "../../labeledInputs/LabelledTextInput";
import { LabelledNumberInput } from "../../labeledInputs/LabelledNumberInput";

type Props = {
  data: {
    make?: string;
    vinCode?: string;
    engineSize?: string;
    odometer?: string;
    type?: string;
    productionYear?: string;
    plateNumber?: string;
    note?: string;
    techInspectionDueDate?: string;
    fabricationYear?: string;
    FuelTypeId?: string;
    VehicleTypeId?: string;
    ClientId?: string;
    EngineSizeMeasurementTypeId?: string;
  };
  dataRef?: MutableRefObject<{ [key: string]: any }>;
};
export function Info(props: Props) {
  const { data, dataRef } = props;

  const {
    make,
    odometer,
    type,
    note,
    techInspectionDueDate,
    fabricationYear,
    name,
    vinCode,
    engineSize,
    productionYear,
    FuelTypeId,
    VehicleTypeId,
    EngineSizeMeasurementTypeId,
    plateNumber,
  } = data || {};

  return (
    <div className="w-full outline outline-white grow-1 rounded-md px-2">
      <LabelledTextInput name="name" dataRef={dataRef} value={name} />
      <LabelledTextInput name="make" dataRef={dataRef} value={make} />
      <LabelledTextInput name="vinCode" dataRef={dataRef} value={vinCode} />
      <LabelledNumberInput name="engineSize" dataRef={dataRef} value={engineSize} />
      <LabelledNumberInput name="odometer" dataRef={dataRef} value={odometer} />
      <LabelledInputWrapper title="vehicleType">
        <VehicleTypeSelect dataRef={dataRef} value={type} />
      </LabelledInputWrapper>
      <LabelledInputWrapper title="productionYear">
        <DateInput name="productionYear" dataRef={dataRef} value={productionYear} />
      </LabelledInputWrapper>
      <LabelledInputWrapper title="fuelType">
        <FuelTypeSelect dataRef={dataRef} value={FuelTypeId} />
      </LabelledInputWrapper>
      <LabelledInputWrapper title="engine_size_measurement_type">
        <EngineSizeMeasurementTypeSelect dataRef={dataRef} value={EngineSizeMeasurementTypeId} />
      </LabelledInputWrapper>
      <LabelledInputWrapper title="vehicleType">
        <VehicleTypeSelect dataRef={dataRef} value={VehicleTypeId} />
      </LabelledInputWrapper>
      <LabelledTextInput name="plateNumber" dataRef={dataRef} value={plateNumber} />
      <LabelledTextInput name="note" dataRef={dataRef} value={note} />
      <LabelledInputWrapper title="techInspectionDueDate">
        <DateInput name="techInspectionDueDate" dataRef={dataRef} value={techInspectionDueDate} />
      </LabelledInputWrapper>
      <LabelledInputWrapper title="fabricationYear">
        <DateInput name="fabricationYear" dataRef={dataRef} value={fabricationYear} />
      </LabelledInputWrapper>
    </div>
  );
}
