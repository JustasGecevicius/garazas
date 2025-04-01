import { MutableRefObject, useEffect, useMemo, useState } from "react";
import { EmptyPicture, OutlinedPicture } from "./Picture";
import { arrayBufferToBase64 } from "../../../utils/imageCodingDecoding";
import { useDispatch } from "react-redux";
import { toggleImageListRefetchState } from "../../../redux/slices/vehicleListRefetchSlice";

type Props = {
  data: any;
  dataRef?: MutableRefObject<{ [key: string]: any }>;
};

export function CarPictures(props: Props) {
  const { data } = props;

  const [addedPictures, setAddedPictures] = useState([]);

  const dispatch = useDispatch();

  const pictures = useMemo(
    () => [...addedPictures, ...(data?.VehiclePhotos || []), null],
    [data?.VehiclePhotos, addedPictures]
  );

  useEffect(() => {
    return () => setAddedPictures([]);
  }, [data]);

  async function handleImageAdd(blob: Blob) {
    const blobArray = await blob.arrayBuffer();
    const blobString = arrayBufferToBase64(blobArray);
    try {
      window.create.createVehicleImage({
        photoBlob: { data: blobString, type: blob.type },
        VehicleId: data?.id,
      });
      setAddedPictures((prev) => [
        ...prev,
        { photoBlob: blobString, photoBlobType: blob.type, id: `${Math.random()}` },
      ]);
    } catch (error) {
      console.error(error);
    }
  }

  function handleImageDelete(picture: any) {
    console.log("ID", picture);
    try {
      if ((picture?.id * 2) % 2 === 0) {
        window.delete.deleteVehicleImage(picture?.id);
        dispatch(toggleImageListRefetchState());
      }
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
          <EmptyPicture key={picture?.id} picture={picture} handleImageAdd={handleImageAdd} />
        )
      )}
    </div>
  );
}
