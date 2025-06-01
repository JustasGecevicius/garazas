import { useState, useEffect, useRef, useMemo } from "react";
import { TaskCreationModal } from "../modals/TaskCreationModal";
import { PartCreationModal } from "../modals/PartCreationModal";

type PropsType = {
  taskId?: number;
};

export function AddNewPartButton({ taskId }: PropsType) {
  const openPartCreationModalRef = useRef<() => void | null>(null);
  const closePartCreationModalRef = useRef<() => void | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCompact, setIsCompact] = useState(false);

  const part = useMemo(() => ({ TaskId: taskId }), [taskId]);

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
        className="flex items-center w-full gap-4 p-4 transition-all duration-200 rounded-lg cursor-pointer hover:bg-gray-700/50 hover:scale-105"
        onClick={() => openPartCreationModalRef.current?.()}
        type="button"
      >
        {isCompact ? (
          <div className="flex justify-center w-full">
            <img src={`icons/menuIcons/car-repair.svg`} alt="plus icon" className="w-7 h-7" />
          </div>
        ) : (
          <div className="flex-row items-center justify-start gap-4 text-lg text-white">
            <img src={`icons/menuIcons/car-repair.svg`} alt="plus icon" className="w-6 h-6" />
            <div className="pt-1">Add Part</div>
          </div>
        )}
      </button>
      <PartCreationModal
        openRef={openPartCreationModalRef}
        closeRef={closePartCreationModalRef}
        part={part}
      />
    </div>
  );
}
