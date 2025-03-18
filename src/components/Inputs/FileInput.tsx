export type DateInputPropsType = {
  name: string;
  callback: (blob: Blob) => void;
};

export function FileInput(props: DateInputPropsType) {
  const { name, callback } = props;

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
      className="flex flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600"
      type="file"
      placeholder={name}
      onChange={handleFileAdd}
    />
  );
}
