import { useRef } from 'react';
import { TaskCreationModal } from '../modals/TaskCreationModal';

export function AddNewTaskButton(props) {
  const openTaskCreationModalRef = useRef<() => void | null>(null);
  const closeTaskCreationModalRef = useRef<() => void | null>(null);

  return (
    <>
      <button
        className='px-2 border border-white rounded-md hover:outline-2 hover:outline-white hover:outline'
        onClick={() => openTaskCreationModalRef.current()}>
        Add Task
      </button>
      <TaskCreationModal
        openRef={openTaskCreationModalRef}
        closeRef={closeTaskCreationModalRef}
      />
    </>
  );
}
