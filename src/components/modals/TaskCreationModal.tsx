import { MutableRefObject, useRef } from 'react';
import { BaseModalWrapper } from './BaseModalWrapper';
import { useDispatch } from 'react-redux';
import { toggleTaskListRefetchState } from '../../redux/slices/vehicleListRefetchSlice';
import VehicleSelect from '../selects/VehicleSelect';
import { TextInput } from '../Inputs/TextInput';
import { DateInput } from '../Inputs/DateInput';

type PropsType = {
  openRef: MutableRefObject<() => void>;
  closeRef: MutableRefObject<() => void>;
};

export function TaskCreationModal(props: PropsType) {
  const { closeRef, openRef } = props;

  const dataRef = useRef<{ [key: string]: any }>({});

  const dispatch = useDispatch();
  
  function submitTask() {
    console.log(dataRef?.current);
    window.create.createTask(dataRef?.current);
    dispatch(toggleTaskListRefetchState())
    closeRef.current();
  }

  return (
    <BaseModalWrapper
      closeRef={closeRef}
      openRef={openRef}>
        <div className='grid grid-cols-2 gap-2'>
           <VehicleSelect dataRef={dataRef} />
           <TextInput name='note' dataRef={dataRef} />
           <DateInput name='task_date' dataRef={dataRef} />
        <div className='flex justify-center col-span-2'>
          <button
            className='rounded-sm'
            onClick={submitTask}>
            Save
          </button>
        </div>
        </div>
    </BaseModalWrapper>
  );
}
