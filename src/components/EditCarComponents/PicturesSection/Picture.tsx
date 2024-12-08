type Props = {
  picture: string,
}

type EmptyProps = {
  picture: null,
}

export function Picture(props: Props) {
  const {picture} = props;
return <div className=" w-full aspect-4/3 rounded-md outline outline-white hover:outline-sky-500">
  <img src={picture} alt="CAR-IMAGE" />
</div> }

export function EmptyPicture(props: EmptyProps) {
return <div className=" w-full outline outline-white aspect-4/3 rounded-md flex hover:outline-sky-500 justify-center items-center">
        <button>
          <img
            alt='ARROW'
            src={'icons/plus.svg'}
            className='h-8 w-8 rounded-full bg-white'></img>
        </button>
</div>
}