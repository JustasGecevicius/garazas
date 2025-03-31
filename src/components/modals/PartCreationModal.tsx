import { MutableRefObject, useEffect, useRef, useState } from "react";
import { BaseModalWrapper } from "./BaseModalWrapper";
import { useDispatch } from "react-redux";
import { toggleTaskListRefetchState } from "../../redux/slices/vehicleListRefetchSlice";
import { TextInput } from "../Inputs/TextInput";
import { togglePartListRefetchState } from "../../redux/slices/partListRefetchSlice";
import { NumberInput } from "../Inputs/NumberInput";

type PropsType = {
  openRef: MutableRefObject<() => void>;
  closeRef: MutableRefObject<() => void>;
  id?: number;
  part?: {
    id?: number;
    vehicle?: number;
    note?: string;
    date?: string;
  };
};

export function PartCreationModal(props: PropsType) {
  const { closeRef, openRef, part } = props;

  const dataRef = useRef<{ [key: string]: any }>(part || {});
  const [value, setValue] = useState(part);

  const dispatch = useDispatch();

  function submitPart() {
    console.log(dataRef, part);
    window.create.createTaskPart(dataRef?.current);
    dispatch(togglePartListRefetchState());
    closeRef.current();
  }

  function savePart() {
    window.update.updatePart(dataRef?.current);
    dispatch(togglePartListRefetchState());
    closeRef.current();
  }

  useEffect(() => {
    setValue(part);
    dataRef.current = part;
  }, [part]);

  return (
    <BaseModalWrapper closeRef={closeRef} openRef={openRef}>
      <div className="grid grid-cols-2 gap-2">
        <TextInput name="name" dataRef={dataRef} value={value?.name} />
        <NumberInput name="price" dataRef={dataRef} value={value?.price} />
        <NumberInput name="installTime" dataRef={dataRef} value={value?.installTime} />
        <div className="flex justify-center col-span-2">
          <button className="rounded-sm" onClick={value?.id ? savePart : submitPart}>
            Save
          </button>
        </div>
      </div>
    </BaseModalWrapper>
  );
}
