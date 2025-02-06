import { Link } from 'react-router';

type NavigateButtonProps = {
  to: string;
  label: string;
};

const NavigateButton = ({ to, label }: NavigateButtonProps) => {
  return (
    <Link
        to={to}
        className='px-2 border border-white rounded-md hover:outline-2 hover:outline-white hover:outline'
      >
      {label}
    </Link>
  );
};

export default NavigateButton;