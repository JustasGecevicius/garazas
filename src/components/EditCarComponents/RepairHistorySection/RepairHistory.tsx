import { MutableRefObject } from "react";
import { TaskHistoryItem } from "./RepairHistoryItem";
import { AddNewTaskButton } from "../../buttons/AddNewTaskButton";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../Routes";

type Props = {
  data: any;
  dataRef?: MutableRefObject<{ [key: string]: any }>;
};

export function RepairHistory(props: Props) {
  const { data } = props;
  const { Tasks } = data || {};

  const navigate = useNavigate();

  function handleSelect(item) {
    navigate(`${ROUTES.EDIT_TASK}/${item.id}`);
  }

  return (
    <>
      <div className="w-full p-2 rounded-md grow-1 flex-col justify-between gap-4">
        <div className="flex-col gap-2">
          {Tasks?.map((task) => (
            <TaskHistoryItem data={task} onClick={handleSelect} />
          ))}
        </div>
        <AddNewTaskButton vehicleId={data?.id} />
      </div>
    </>
  );
}
