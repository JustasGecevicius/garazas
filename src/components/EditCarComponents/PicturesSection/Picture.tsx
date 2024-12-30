type Props = {
  picture: string,
}

type EmptyProps = {
  picture: null | string;
};

export function Picture(props: Props) {
  const { picture } = props;
  return (
    <div className='w-full rounded-md  aspect-4/3 outline outline-white hover:outline-sky-500'>
      <img
        src={picture}
        alt='CAR-IMAGE'
      />
    </div>
  );
}

export function EmptyPicture(props: EmptyProps) {
  return (
    <div className='flex items-center justify-center w-full rounded-md  outline outline-white aspect-4/3 hover:outline-sky-500'>
      <button>
        <img
          alt='ARROW'
          src={'icons/plus.svg'}
          className='w-8 h-8 bg-white rounded-full'></img>
      </button>
    </div>
  );
}