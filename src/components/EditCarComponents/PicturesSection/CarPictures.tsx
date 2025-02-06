import { EmptyPicture, Picture } from "./Picture"

type Props = {
  data: any,
}

export function CarPictures(props: Props) {

  const pictures = ['Bmw330.png', 'Bmw330.png', 'Bmw330.png', null]
  
  return <div className="grow-1 w-full gap-2 grid grid-cols-2 auto-rows-min">
    {pictures?.map(pic => pic !== null ? <Picture picture={pic}/> : <EmptyPicture picture={pic}/>)}
  </div>
}