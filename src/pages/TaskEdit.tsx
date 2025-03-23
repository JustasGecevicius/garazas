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

  function base64ToBlob(base64String: string, contentType = "") {
    const byteCharacters = atob(base64String);
    const byteArrays = [];

    for (let i = 0; i < byteCharacters.length; i++) {
      byteArrays.push(byteCharacters.charCodeAt(i));
    }

    const byteArray = new Uint8Array(byteArrays);
    return new Blob([byteArray], { type: contentType });
  }

  function arrayBufferToBase64(buffer: ArrayBuffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  const handleFileChange = async (blob: Blob) => {
    const blobArray = await blob.arrayBuffer();
    const blobString = arrayBufferToBase64(blobArray);
    try {
      window.create.createTaskImage({
        photoBlob: { data: blobString, type: blob.type },
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
      const blob = base64ToBlob(data.TaskPhotos[0].photoBlob, data.TaskPhotos[0].photoBlobType);
      const url = URL.createObjectURL(blob);
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
