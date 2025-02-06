import { EmptyPicture, Picture } from "./Picture"

type Props = {
  data: any,
}

export function CarPictures(props: Props) {

  const pictures = ['x', 'y', 'f', 'h', null]
  
  return <div className="grow-1 w-full gap-2 rounded-md outline outline-green-900 grid grid-cols-2 auto-rows-min">
    {pictures?.map(pic => pic !== null ? <Picture picture={pic}/> : <EmptyPicture picture={pic}/>)}
  </div>
}