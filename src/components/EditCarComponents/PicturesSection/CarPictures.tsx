import { MutableRefObject } from "react";
import { EmptyPicture, Picture } from "./Picture";

type Props = {
  data: any;
  dataRef?: MutableRefObject<{ [key: string]: any }>;
};

export function CarPictures(props: Props) {
  const pictures = ["Bmw330.png", "Bmw330.png", "Bmw330.png", null];

  return (
    <div className="grow-1 w-full gap-2 grid grid-cols-2 auto-rows-min">
      {pictures?.map((pic, index) =>
        pic !== null ? (
          <Picture key={`${pic}_${index}`} picture={pic} />
        ) : (
          <EmptyPicture picture={pic} />
        )
      )}
    </div>
  );
}
