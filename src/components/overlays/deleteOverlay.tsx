import { DeleteButton, DeleteButtonPropsType } from "../buttons/DeleteButton";

type PropsType = {
  onDelete: DeleteButtonPropsType["onDelete"];
};

export function DeleteOverlay(props: PropsType) {
  const { onDelete } = props;
  return (
    <div className="flex w-full h-full center absolute top-0 left-0 bg-black/50 z-10">
      <DeleteButton onDelete={onDelete} />
    </div>
  );
}
