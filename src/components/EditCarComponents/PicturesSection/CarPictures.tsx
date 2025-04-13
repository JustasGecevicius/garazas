import { MutableRefObject, useEffect, useMemo, useState } from "react";
import { EmptyPicture, OutlinedPicture } from "./Picture";
import { arrayBufferToBase64 } from "../../../utils/imageCodingDecoding";

type Props = {
  images: any;
  dataRef?: MutableRefObject<{ [key: string]: any }>;
  createMethod: (blobString: string, blobType: string) => void;
  deleteMethod: (id: number) => void;
};

export function CarPictures(props: Props) {
  const { images, createMethod, deleteMethod } = props;

  const [addedPictures, setAddedPictures] = useState([]);

  const pictures = useMemo(
    () => [...addedPictures, ...(images || []), null],
    [images, addedPictures]
  );

  useEffect(() => {
    return () => setAddedPictures([]);
  }, [images]);

  async function handleImageAdd(blob: Blob) {
    const blobArray = await blob.arrayBuffer();
    const blobString = arrayBufferToBase64(blobArray);
    try {
      createMethod(blobString, blob.type);
      setAddedPictures((prev) => [
        ...prev,
        { photoBlob: blobString, photoBlobType: blob.type, id: `${Math.random()}` },
      ]);
    } catch (error) {
      console.error(error);
    }
  }

  function handleImageDelete(picture: any) {
    try {
      deleteMethod(picture.id);
      setAddedPictures((prev) => prev.filter((item) => item.id !== picture.id));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="grow-1 w-full gap-2 flex-col auto-rows-min">
      {pictures?.map((picture) =>
        picture !== null ? (
          <OutlinedPicture
            key={picture?.id}
            picture={picture}
            onDelete={() => handleImageDelete(picture)}
          />
        ) : (
          <EmptyPicture key={picture?.id} handleImageAdd={handleImageAdd} />
        )
      )}
    </div>
  );
}
