import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { TextInput } from '../components/Inputs/TextInput';
import { DateInput } from '../components/Inputs/DateInput';
import VehicleSelect from '../components/selects/VehicleSelect';

const TaskEdit = () => {
  const { id } = useParams();

  const dataRef = useRef<{ [key: string]: any }>({});

  const [imageURL, setImageURL] = useState(null);

  const { data } = useQuery({
    queryKey: ['edit-task', id],
    queryFn: async () => {
      const response = await window.select.selectTask(id, {
        include: ['TaskPhoto'],
      });
      dataRef.current = response;
      console.log('RESPONSE', response);
      return response;
    },
  });

  useEffect(() => {
    console.log(data);
    if (data?.TaskPhotos?.[0]?.photoBlob) {
      // const base64String = data.TaskPhotos[0].photoBlob;
      // const x = encodeURIComponent(base64String);
      // const byteCharacters = btoa(unescape(x));
      // console.log('CHARACTERS', byteCharacters, x);
      // const byteNumbers = new Array(byteCharacters.length);
      // for (let i = 0; i < byteCharacters.length; i++) {
      //   byteNumbers[i] = byteCharacters.charCodeAt(i);
      // }
      // const byteArray = new Uint8Array(byteNumbers);
      // const blob = new Blob([byteArray], { type: 'image/jpeg' });
      // const url = URL.createObjectURL(blob);
      // console.log('BLOBAS', blob, url, base64String, byteCharacters);
      // setImageURL(base64String);
    }
  }, [data]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log('FILE', file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        console.log('READER', reader);
        const blob = new Blob([reader.result as ArrayBuffer], {
          type: file.type,
        });
        dataRef.current.fileBlob = blob;
        const buffer = await blob?.text();
        window.create.createTaskImage({
          photoBlob: buffer,
          TaskId: id,
        });
        setImageURL(buffer);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    window.update.updateTask(dataRef.current);
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <VehicleSelect
          dataRef={dataRef}
          value={data?.VehicleId}
        />
        <TextInput
          name='note'
          dataRef={dataRef}
          value={data?.note}
        />
        <DateInput
          name='taskDate'
          dataRef={dataRef}
          value={data?.taskDate}
        />
        <input
          type='file'
          onChange={handleFileChange}
        />
        <button type='submit'>Save Task</button>
        <img
          src={`data:image/jpeg;base64;charset=utf-8,${imageURL}`}
          alt='nx'
        />
      </form>
    </div>
  );
};

export default TaskEdit;
