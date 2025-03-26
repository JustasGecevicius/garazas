import { useState, useEffect, useRef } from "react";
import { VehicleCreationModal } from "../modals/VehicleCreationModal";

export function AddNewVehicleButton() {
  const openVehicleCreationModalRef = useRef<() => void | null>(null);
  const closeVehicleCreationModalRef = useRef<() => void | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const [isCompact, setIsCompact] = useState(false);

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
        className="w-full p-4 rounded-lg transition-all duration-200 hover:bg-gray-700/50 hover:scale-105 cursor-pointer flex gap-4"
        onClick={() => openVehicleCreationModalRef.current?.()}
      >
        {isCompact ? (
          <div className="flex justify-center w-full">
            <img src={`icons/menuIcons/plus.svg`} alt="plus icon" className="w-8 h-8" />
          </div>
        ) : (
          <div className="flex-row gap-4 justify-start items-center text-white text-lg">
            <img src={`icons/menuIcons/plus.svg`} alt="plus icon" className="w-8 h-8" />
            <div className="pt-1">Add new car</div>
          </div>
        )}
      </button>
      <VehicleCreationModal
        openRef={openVehicleCreationModalRef}
        closeRef={closeVehicleCreationModalRef}
      />
    </div>
  );
}
