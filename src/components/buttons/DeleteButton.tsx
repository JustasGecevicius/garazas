export type DeleteButtonPropsType = {
  onDelete: (...args: any[]) => void;
};

export function DeleteButton(props: DeleteButtonPropsType) {
  const { onDelete } = props;
  return (
    <button onClick={onDelete} type="button" className="px-4 text-gray-700 bg-gray-400 rounded">
      Delete
    </button>
  );
}
