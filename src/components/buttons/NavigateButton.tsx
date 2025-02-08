import { Link } from 'react-router';

type NavigateButtonProps = {
  to: string;
  label: string;
};

const NavigateButton = ({ to, label }: NavigateButtonProps) => {
  return (
    <Link
        to={to}
        className='px-4 py-2 border border-white rounded-md hover:outline-2 hover:outline-white hover:outline text-center'
      >
      {label}
    </Link>
  );
};

export default NavigateButton;