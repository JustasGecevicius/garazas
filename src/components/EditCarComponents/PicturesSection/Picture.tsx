import { useId, useState } from "react";
import { FileInput } from "../../Inputs/FileInput";
import { useImageFromDB } from "../../../hooks/imageHooks";

type Props = {
  picture: string;
};

type EmptyProps = {
  handleImageAdd: (blob: Blob) => void;
};
export function OutlinedPicture(props: Props) {
  const { picture } = props;
  return (
    <div className="flex items-center w-full rounded-md aspect-4/3 outline outline-white hover:outline-sky-500">
      <BasePicture picture={picture} />
    </div>
  );
}

export function BasePicture(props: Props) {
  const { picture } = props;

  const imageURL = useImageFromDB(picture);

  return <img src={imageURL} alt="CAR-IMAGE" />;
}

export function EmptyPicture(props: EmptyProps) {
  const { handleImageAdd } = props;
  const inputId = useId();
  return (
    <label htmlFor={inputId} className="hover:cursor-pointer">
      <div className="flex items-center justify-center w-full rounded-md  outline outline-white aspect-4/3 hover:outline-sky-500">
        <img alt="ARROW" src={"icons/plus.svg"} className="w-8 h-8 bg-white rounded-full " />
        <FileInput callback={handleImageAdd} id={inputId} hide />
      </div>
    </label>
  );
}
