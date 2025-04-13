import { useState, useEffect, useRef, useMemo } from "react";
import { TaskCreationModal } from "../modals/TaskCreationModal";

type PropsType = {
  vehicleId?: string;
};

export function AddNewTaskButton({ vehicleId }: PropsType) {
  const openTaskCreationModalRef = useRef<() => void | null>(null);
  const closeTaskCreationModalRef = useRef<() => void | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCompact, setIsCompact] = useState(false);

  const task = useMemo(() => ({ vehicle: vehicleId }), [vehicleId]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        setIsCompact(width < 150); // Adjust threshold as needed
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <button
        className="w-full p-4 rounded-lg transition-all duration-200 hover:bg-gray-700/50 hover:scale-105 cursor-pointer flex items-center gap-4"
        onClick={() => openTaskCreationModalRef.current?.()}
        type="button"
      >
        {isCompact ? (
          <div className="flex justify-center w-full">
            <img src={`icons/menuIcons/car-repair.svg`} alt="plus icon" className="w-7 h-7" />
          </div>
        ) : (
          <div className="flex-row gap-4 justify-start items-center text-white text-lg">
            <img src={`icons/menuIcons/car-repair.svg`} alt="plus icon" className="w-6 h-6" />
            <div className="pt-1">Add Task</div>
          </div>
        )}
      </button>
      <TaskCreationModal
        openRef={openTaskCreationModalRef}
        closeRef={closeTaskCreationModalRef}
        task={task}
      />
    </div>
  );
}
