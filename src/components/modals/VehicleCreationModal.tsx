import { MutableRefObject, useRef, useState } from "react";
import { BaseModalWrapper } from "./BaseModalWrapper";
import VehicleTypeSelect from "../selects/VehicleTypeSelect";
import { EngineSizeMeasurementTypeSelect } from "../selects/EngineTypeSelect";
import FuelTypeSelect from "../selects/FuelTypeSelect";
import { TextInput } from "../Inputs/TextInput";
import { NumberInput } from "../Inputs/NumberInput";
import { DateInput } from "../Inputs/DateInput";
import { useDispatch } from "react-redux";
import { toggleVehicleListRefetchState } from "../../redux/slices/vehicleListRefetchSlice";
import { LabelledInputWrapper } from "../Inputs/LabelledInput";

type PropsType = {
  openRef: MutableRefObject<() => void>;
  closeRef: MutableRefObject<() => void>;
};

export function VehicleCreationModal(props: PropsType) {
  const { closeRef, openRef } = props;

  const dataRef = useRef<{ [key: string]: any }>({});

  const [modalKey, setModalKey] = useState(() => Math.random());

  const dispatch = useDispatch();

  function submitVehicle() {
    window.create.createVehicle(dataRef?.current);
    dispatch(toggleVehicleListRefetchState());
    dataRef.current = {};
    setModalKey(Math.random()); // To reset the modal
    closeRef.current();
  }

  return (
    <BaseModalWrapper closeRef={closeRef} openRef={openRef} key={modalKey}>
      <form
        className="grid grid-cols-2 gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          submitVehicle();
        }}
      >
        <TextInput name="name" dataRef={dataRef} required />
        <TextInput name="model" dataRef={dataRef} />
        <NumberInput name="engineSize" dataRef={dataRef} />
        <FuelTypeSelect dataRef={dataRef} />
        <TextInput name="vinCode" dataRef={dataRef} />
        <TextInput name="make" dataRef={dataRef} />
        <EngineSizeMeasurementTypeSelect dataRef={dataRef} />
        <NumberInput name="engineSize" dataRef={dataRef} />
        <NumberInput name="odometer" dataRef={dataRef} />
        <TextInput name="plateNumber" dataRef={dataRef} />
        <LabelledInputWrapper title="fabricationYear">
          <DateInput name="fabricationYear" dataRef={dataRef} />
        </LabelledInputWrapper>
        <LabelledInputWrapper title="techInspectionDueDate">
          <DateInput name="techInspectionDueDate" dataRef={dataRef} />
        </LabelledInputWrapper>
        <TextInput name="note" dataRef={dataRef} />
        <VehicleTypeSelect dataRef={dataRef} />
        <div className="flex justify-center col-span-2">
          <button className="flex-row text-center px-10 border rounded-md bg-gray-100 p-1 hover:border-2 hover:outline-gray-600 hover:bg-gray-200">
            Išsaugoti
          </button>
        </div>
      </form>
    </BaseModalWrapper>
  );
}
