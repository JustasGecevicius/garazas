import { MutableRefObject, useEffect, useMemo } from "react";
import { EmptyPicture, OutlinedPicture } from "./Picture";
import { arrayBufferToBase64 } from "../../../utils/imageCodingDecoding";

type Props = {
  data: any;
  dataRef?: MutableRefObject<{ [key: string]: any }>;
};

export function CarPictures(props: Props) {
  const { data } = props;

  const pictures = useMemo(() => [...(data?.VehiclePhotos || []), null], [data?.VehiclePhotos]);

  async function handleImageAdd(blob: Blob) {
    const blobArray = await blob.arrayBuffer();
    const blobString = arrayBufferToBase64(blobArray);
    try {
      window.create.createVehicleImage({
        photoBlob: { data: blobString, type: blob.type },
        VehicleId: data?.id,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="grow-1 w-full gap-2 flex-col auto-rows-min">
      {pictures?.map((picture) =>
        picture !== null ? (
          <OutlinedPicture key={picture?.id} picture={picture} />
        ) : (
          <EmptyPicture key={picture?.id} picture={picture} handleImageAdd={handleImageAdd} />
        )
      )}
    </div>
  );
}
