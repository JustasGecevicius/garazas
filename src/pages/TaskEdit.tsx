import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { TextInput } from "../components/Inputs/TextInput";
import { DateInput } from "../components/Inputs/DateInput";
import VehicleSelect from "../components/selects/VehicleSelect";
import { FileInput } from "../components/Inputs/FileInput";

const TaskEdit = () => {
  const { id } = useParams();

  const dataRef = useRef<{ [key: string]: any }>({});
  const imageRef = useRef<HTMLImageElement>(null);

  const [imageURL, setImageURL] = useState(null);

  const { data } = useQuery({
    queryKey: ["edit-task", id],
    queryFn: async () => {
      const response = await window.select.selectTask(id, {
        include: ["TaskPhoto"],
      });
      dataRef.current = response;
      console.log(response);
      return response;
    },
  });

  const handleFileChange = async (blob: Blob) => {
    const blobArray = await blob.text();
    console.log(blobArray);
    try {
      window.create.createTaskImage({
        photoBlob: { data: blobArray, type: blob.type },
        TaskId: id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    window.update.updateTask(dataRef.current);
  };

  useEffect(() => {
    if (data?.TaskPhotos?.[0]?.photoBlob) {
      console.log(data?.TaskPhotos?.[0]?.photoBlob);
      const blob = new Blob([new Uint8Array(data.TaskPhotos[0].photoBlob)], {
        type: data.TaskPhotos[0].photoBlobType,
      });

      console.log(blob);
      const url = URL.createObjectURL(blob);
      console.log(url);
      imageRef.current.src = url;
      setImageURL(url);
    }
  }, [data?.TaskPhotos]);

  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <VehicleSelect dataRef={dataRef} value={data?.VehicleId} />
        <TextInput name="note" dataRef={dataRef} value={data?.note} />
        <DateInput name="taskDate" dataRef={dataRef} value={data?.taskDate} />
        <FileInput name="taskPhoto" callback={handleFileChange} />
        <button type="submit">Save Task</button>
        <img ref={imageRef} src={imageURL} alt="nx NEVEIKIA DAAAAR" />
      </form>
    </div>
  );
};

export default TaskEdit;
