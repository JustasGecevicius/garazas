import React, { useRef } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { TextInput } from "../components/Inputs/TextInput";
import { DateInput } from "../components/Inputs/DateInput";
import VehicleSelect from "../components/selects/VehicleSelect";

const TaskEdit = () => {
  const { id } = useParams();

  const dataRef = useRef<{ [key: string]: any }>({});

  const { data } = useQuery({
    queryKey: ["edit-task", id],
    queryFn: async () => {
      const response = await window.select.selectTask(id);
      dataRef.current = response;
      return response;
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    window.update.updateTask(dataRef.current);
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <VehicleSelect dataRef={dataRef} value={data?.VehicleId} />
        <TextInput name="note" dataRef={dataRef} value={data?.note} />
        <DateInput name="taskDate" dataRef={dataRef} value={data?.taskDate} />
        <button type="submit">Save Task</button>
      </form>
    </div>
  );
};

export default TaskEdit;
