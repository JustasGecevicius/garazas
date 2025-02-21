import { MutableRefObject, useEffect, useMemo, useRef, useState } from "react";
import { RepairHistoryItem } from "./RepairHistoryItem";
import { TaskCreationModal } from "../../modals/TaskCreationModal";
import { cloneDeep } from "lodash";
import { AddNewTaskButton } from "../../buttons/AddNewTaskButton";

type Props = {
  data: any;
  dataRef?: MutableRefObject<{ [key: string]: any }>;
};

export function RepairHistory(props: Props) {
  const { data } = props;
  const { tasks } = data || {};

  const [selectedTask, setSelectedTask] = useState(null);

  const openRef = useRef(() => {});
  const closeRef = useRef(() => {});

  function handleSelect(item) {
    setSelectedTask(item);
    openRef.current();
  }

  const selectedTaskAllData = useMemo(() => {
    return { ...selectedTask, vehicle: cloneDeep(data) };
  }, [selectedTask, data]);

  console.log("DATA", data);

  useEffect(() => {
    console.log("TASKALLDATA", selectedTaskAllData);
  }, [selectedTaskAllData]);

  return (
    <>
      <div className="w-full p-2 rounded-md grow-1 outline outline-red-900 flex flex-col justify-between">
        <div>
          {tasks?.map((task) => (
            <RepairHistoryItem data={task} onClick={handleSelect} />
          ))}
        </div>
        <AddNewTaskButton vehicleId={data?.id} />
      </div>
      <TaskCreationModal task={selectedTaskAllData} closeRef={closeRef} openRef={openRef} />
    </>
  );
}
