export function SaveButton(props) {
  const { handleSave } = props;
  return (
    <button onClick={handleSave} className="px-4 text-white bg-blue-500 rounded">
      Save
    </button>
  );
}
