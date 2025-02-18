import { useRef } from "react";
import { TaskCreationModal } from "../modals/TaskCreationModal";

export function AddNewTaskButton(props) {
  const openTaskCreationModalRef = useRef<() => void | null>(null);
  const closeTaskCreationModalRef = useRef<() => void | null>(null);

  return (
    <>
      <button
        className="w-full p-4 rounded-lg transition-all duration-200 hover:bg-gray-700/50 hover:scale-105 cursor-pointer"
        onClick={() => openTaskCreationModalRef.current()}
      >
        Add Task
      </button>
      <TaskCreationModal
        openRef={openTaskCreationModalRef}
        closeRef={closeTaskCreationModalRef}
      />
    </>
  );
}
