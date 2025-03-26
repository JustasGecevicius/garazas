import { useEffect, useState } from "react";
import { base64ToBlob } from "../utils/imageCodingDecoding";

export const useImageFromDB = (imageData) => {
  const [imageLink, setImageLink] = useState("");

  useEffect(() => {
    const { photoBlob, photoBlobType } = imageData || {};
    if (typeof photoBlob !== "string" || typeof photoBlobType !== "string") return;
    const blob = base64ToBlob(photoBlob, photoBlobType);
    const url = URL.createObjectURL(blob);
    setImageLink(url);
  }, [imageData]);

  return imageLink;
};
