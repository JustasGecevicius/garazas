import { MutableRefObject, useEffect, useRef, useState } from "react";
import { BaseModalWrapper } from "./BaseModalWrapper";
import { useDispatch } from "react-redux";
import { toggleTaskListRefetchState } from "../../redux/slices/vehicleListRefetchSlice";
import VehicleSelect from "../selects/VehicleSelect";
import { TextInput } from "../Inputs/TextInput";
import { DateInput } from "../Inputs/DateInput";

declare global {
  interface Window {
    create: {
      createTask: (data: any) => void;
      updateTask: (data: any) => void;
    };
  }
}

type PropsType = {
  openRef: MutableRefObject<() => void>;
  closeRef: MutableRefObject<() => void>;
  id?: number;
  task?: {
    id?: number;
    vehicle?: string;
    note?: string;
    date?: string;
  };
};

export function TaskCreationModal(props: PropsType) {
  const { closeRef, openRef, task } = props;

  const dataRef = useRef<{ [key: string]: any }>({});
  const [value, setValue] = useState(task);

  const dispatch = useDispatch();

  function submitTask() {
    window.create.createTask(dataRef?.current);
    dispatch(toggleTaskListRefetchState());
    closeRef.current();
  }

  function saveTask() {
    window.create.updateTask(dataRef?.current);
    dispatch(toggleTaskListRefetchState());
    closeRef.current();
  }

  useEffect(() => {
    setValue(task);
  }, [task]);

  return (
    <BaseModalWrapper closeRef={closeRef} openRef={openRef}>
      <div className="grid grid-cols-2 gap-2">
        <VehicleSelect dataRef={dataRef} value={value?.vehicle} />
        <TextInput name="note" dataRef={dataRef} value={value?.note} />
        <DateInput name="task_date" value={value?.date} dataRef={dataRef} />
        <div className="flex justify-center col-span-2">
          <button
            className="rounded-sm"
            onClick={value?.id ? saveTask : submitTask}
          >
            Save
          </button>
        </div>
      </div>
    </BaseModalWrapper>
  );
}
