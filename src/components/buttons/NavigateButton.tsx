import { useNavigate } from "react-router";

type NavigateButtonProps = {
  to: string;
};

const NavigateButton = ({ to }: NavigateButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(to)}
      className="w-12 aspect-square bg-white rounded-2xl"
    >
      <img
        alt="visit_arrow"
        src={"icons/right-arrow.svg"}
        className="flex-col center rounded-2xl"
      ></img>
    </button>
  );
};

export default NavigateButton;
