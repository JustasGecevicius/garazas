import { Link } from 'react-router';

type NavigateButtonProps = {
  to: string;
  src: string;
};

const NavigateButtonWithImage = ({ to, src }: NavigateButtonProps) => {
  return (
    <Link to={to} className="rounded-sm bg-blue-500 text-white px-4 py-2 inline-block">
        <img src={src}/>
        BACK
    </Link>
  );
};

export default NavigateButtonWithImage;