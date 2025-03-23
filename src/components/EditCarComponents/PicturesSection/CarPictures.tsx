import { MutableRefObject, useMemo } from "react";
import { EmptyPicture, Picture } from "./Picture";
import { arrayBufferToBase64 } from "../../../utils/imageCodingDecoding";

type Props = {
  data: any;
  dataRef?: MutableRefObject<{ [key: string]: any }>;
};

export function CarPictures(props: Props) {
  const { data } = props;
  const pictures = useMemo(() => [{}, null], []);

  async function handleImageAdd(blob: Blob) {
    console.log("ADD IMAGE");
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

  const handleImageLoad = (images) => {};

  // useEffect(handleImageAdd, []);

  return (
    <div className="grow-1 w-full gap-2 flex flex-col auto-rows-min">
      {pictures?.map((pic, index) =>
        pic !== null ? (
          <Picture key={`${pic}_${index}`} picture={pic} />
        ) : (
          <EmptyPicture picture={pic} onClick={handleImageAdd} />
        )
      )}
    </div>
  );
}
