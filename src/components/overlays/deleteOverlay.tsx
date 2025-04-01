import { DeleteButton } from "../buttons/DeleteButton";

export function DeleteOverlay(props) {
  const { onDelete } = props;
  return (
    <div className="flex w-full h-full center absolute top-0 left-0 bg-black/50 z-10">
      <DeleteButton onDelete={onDelete} />
    </div>
  );
}
