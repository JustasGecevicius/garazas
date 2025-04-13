import { useEffect, useId, useState } from "react";
import { FileInput } from "../../Inputs/FileInput";
import { useImageFromDB } from "../../../hooks/imageHooks";
import { checkImage } from "../../../functions/fetch/image";
import { DeleteOverlay } from "../../overlays/deleteOverlay";

type EmptyPicturePropsType = {
  handleImageAdd: (blob: Blob) => void;
};

type BasePicturePropsType = {
  picture: string;
};

type OutlinedPicturePropsType = { onDelete: () => void } & BasePicturePropsType;

export function OutlinedPicture(props: OutlinedPicturePropsType) {
  const { picture, onDelete } = props;

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="flex items-center w-full rounded-md aspect-4/3 outline outline-white hover:outline-sky-500 relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <BasePicture picture={picture} />
      {isHovering && onDelete && <DeleteOverlay onDelete={onDelete} />}
    </div>
  );
}

export function BasePicture(props: BasePicturePropsType) {
  const { picture } = props;

  const imageURL = useImageFromDB(picture);
  const [isImageOk, setIsImageOk] = useState(false);

  useEffect(() => {
    if (!imageURL) return;
    async function checkURL() {
      const check = await checkImage("https://picsum.photos/200/300");
      setIsImageOk(check);
    }
    checkURL();
  }, [imageURL]);

  return isImageOk ? <img src={imageURL} alt="CAR-IMAGE" /> : null;
}

export function EmptyPicture(props: EmptyPicturePropsType) {
  const { handleImageAdd } = props;
  const inputId = useId();
  return (
    <label htmlFor={inputId} className="hover:cursor-pointer">
      <div className="flex items-center justify-center w-full rounded-md  outline outline-white aspect-4/3 hover:outline-sky-500 px-16">
        <img
          alt="ARROW"
          src={"icons/plus.svg"}
          className="bg-white rounded-full min-w-8 min-h-8 aspect-square"
        />
        <FileInput callback={handleImageAdd} id={inputId} hide />
      </div>
    </label>
  );
}
