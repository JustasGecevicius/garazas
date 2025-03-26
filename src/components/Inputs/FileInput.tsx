import { useId } from "react";

export type DateInputPropsType = {
  name?: string;
  callback: (blob: Blob) => void;
  id?: string;
  hide?: boolean;
};

export function FileInput(props: DateInputPropsType) {
  const { name, callback, id: outsideId, hide } = props;
  const id = useId();

  function handleFileAdd(e) {
    e.preventDefault();
    const newFile = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(newFile);

    fileReader.onloadend = function (e) {
      console.log(newFile.type);
      const blob = new Blob([fileReader.result], { type: newFile.type });
      callback(blob);
    };
  }

  return (
    <input
      className={
        hide
          ? "hidden"
          : "flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600"
      }
      type="file"
      placeholder={name}
      onChange={handleFileAdd}
      id={outsideId || id}
    />
  );
}
