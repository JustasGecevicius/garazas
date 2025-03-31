export function DeleteButton(props) {
  const { handleDelete } = props;
  return (
    <button onClick={handleDelete} className="px-4 text-gray-700 bg-gray-400 rounded">
      Delete
    </button>
  );
}
