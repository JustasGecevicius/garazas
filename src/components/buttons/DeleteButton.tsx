export function DeleteButton(props) {
  const { onDelete } = props;
  return (
    <button onClick={onDelete} className="px-4 text-gray-700 bg-gray-400 rounded">
      Delete
    </button>
  );
}
