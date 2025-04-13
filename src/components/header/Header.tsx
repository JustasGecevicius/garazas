import { AddNewVehicleButton } from "../buttons/AddNewVehicleButton";
import { Link } from "react-router";
import { AddNewTaskButton } from "../buttons/AddNewTaskButton";
import { useMemo, useState } from "react";
import { ROUTES } from "../../Routes";

function HeaderCollapseButton(props) {
  const { setIsCollapsed, isCollapsed } = props;
  return (
    <button
      onClick={() => setIsCollapsed((prevState) => !prevState)}
      className="absolute top-0 right-0 p-2 transition transform translate-x-1/2 translate-y-1/2 rounded bg-stone-900"
      type="button"
    >
      <svg
        className="w-6 h-6 transition-all duration-300 transform"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={isCollapsed ? "M 8 4 l 7 7 l -7 7" : "M 15 19 l -7 -7 l 7 -7"}
        />
      </svg>
    </button>
  );
}

export function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const options = useMemo(
    () => [
      { to: ROUTES.ROOT, src: "dashboard", label: "Dashboard" },
      { to: ROUTES.VEHICLE_LIST, src: "cars", label: "All cars" },
      { to: ROUTES.TASK_LIST, src: "task", label: "All repairs" },
    ],
    []
  );

  const optionComponents = useMemo(
    () =>
      options.map((item, index) => (
        <Link key={index} to={item.to} className="w-full">
          <div
            key={index}
            className={`flex items-center ${
              isCollapsed ? "px-2 gap-0 justify-center" : "justify-start px-3 gap-4"
            } py-3 rounded-lg transition-all duration-200 hover:bg-gray-700/50 hover:scale-105 cursor-pointer`}
          >
            <div className="flex items-center justify-center w-8 h-8">
              <img src={`icons/menuIcons/${item.src}.svg`} alt={item.label} className="w-6 h-6" />
            </div>

            <span
              className={`text-white text-lg transition-all duration-300 ${
                isCollapsed ? "max-w-0 overflow-hidden opacity-0 h-10" : "max-w-full opacity-100"
              }`}
            >
              {item.label}
            </span>
          </div>
        </Link>
      )),
    [isCollapsed, options]
  );

  return (
    <div className="flex">
      <div
        className={`bg-stone-900 text-white transition-all duration-300 ${
          isCollapsed ? "w-24" : "w-64"
        } py-6 gap-10 rounded-xl border-2 border-white flex-col relative`}
      >
        <div className="px-6">
          <Link to="/">
            <div
              className={`flex items-center ${isCollapsed ? "justify-center" : "justify-start"}`}
            >
              <img src="bmw.png" alt="logo" className="w-10 h-10" />
              <span
                className={`text-2xl font-semibold transition-all duration-300 ${
                  isCollapsed ? "max-w-0 overflow-hidden opacity-0" : "max-w-full opacity-100 pl-5"
                }`}
              >
                Garazas
              </span>
            </div>
          </Link>
        </div>
        <div className="flex-col w-full gap-2 px-3 transition-all duration-300">
          <AddNewVehicleButton />
          <AddNewTaskButton />
        </div>

        <div
          className={`flex-col w-full gap-2 px-3 transition-all duration-300 ${
            isCollapsed ? "items-center justify-center" : "items-start"
          }`}
        >
          {optionComponents}
        </div>
        <HeaderCollapseButton setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
      </div>
    </div>
  );
}
