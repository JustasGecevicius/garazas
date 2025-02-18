import moment from "moment";
import { ClockComponent } from "./Clock";
import { AddNewVehicleButton } from "../buttons/AddNewVehicleButton";
import NavigateButton from "../buttons/NavigateButton";
import { Link } from "react-router";
import { AddNewTaskButton } from "../buttons/AddNewTaskButton";
import { useState } from "react";

function HeaderMain() {
  return (
    <>
      <div className="flex justify-center sm:justify-between items-center text-white rounded-xl bg-stone-900 outline-white outline outline-2 p-5">
        <Link to="/">
          <div className="flex flex-row gap-5 items-center">
            <img src="bmw.png" alt="logo" className="max-w-8 max-h-8" />
            <h1 className="text-2xl">Garazas</h1>
          </div>
        </Link>

        <div className="hidden sm:flex justify-between items-center gap-6 text-xl">
          <p className="hidden md:flex">{moment().format("YYYY-MM-DD")}</p>
          <ClockComponent />
          <AddNewVehicleButton />
          <NavigateButton label="list" to="/vehicle-list" />
          {/* <NavigateButton label='Layout' to='/responsiveTest'/> */}
        </div>
      </div>

      <div
        id="navBurger"
        className="sm:hidden grid py-4 gap-2 text-lg items-center w-full"
      >
        <div className="flex flex-row justify-between">
          <p>{moment().format("YYYY-MM-DD")}</p>
          <ClockComponent />
        </div>

        <AddNewVehicleButton />
        <AddNewTaskButton />
        <NavigateButton label="list" to="/vehicle-list" />
        <NavigateButton label="task_list" to="/task-list" />
        {/* <NavigateButton label='Layout' to='/responsiveTest'/> */}
      </div>
    </>
  );
}

export function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex">
      <div
        className={`bg-stone-900 text-white transition-all duration-300 ${
          isCollapsed ? "w-24" : "w-64"
        } h-full py-6 my-5 gap-10 rounded-xl border-2 border-white flex flex-col relative`}
      >
        <div className="pl-5">
          <Link to="/">
            <div className="flex items-center gap-5">
              <img src="bmw.png" alt="logo" className="w-10 h-10" />
              <span
                className={`text-2xl font-semibold transition-all duration-300 ${
                  isCollapsed
                    ? "max-w-0 overflow-hidden opacity-0"
                    : "max-w-full opacity-100"
                }`}
              >
                Garazas
              </span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col w-full gap-2 px-3 transition-all duration-300">
          <AddNewVehicleButton />
          <AddNewTaskButton />
        </div>

        <div className="px-3">
          {/* <Link to="/add-car">  */}
          <div className="flex items-center gap-4 pl-3 pr-1 py-3 rounded-lg transition-all duration-200 hover:bg-gray-700/50 hover:scale-105 cursor-pointer">
            <div
              className={`w-10 h-10 flex justify-center ${
                isCollapsed ? "w-full" : "max-w-full opacity-100"
              }`}
            >
              <img
                src={"icons/menuIcons/plus.svg"}
                alt="Add"
                className={`w-8 h-8`}
              />
            </div>
            <span
              className={`text-white text-lg transition-all duration-300 ${
                isCollapsed
                  ? "max-w-0 overflow-hidden opacity-0"
                  : "max-w-full opacity-100"
              }`}
            >
              Add new car
            </span>
          </div>
          {/* </Link> */}
        </div>

        <div
          className={`flex flex-col w-full gap-2 px-3 transition-all duration-300 ${
            isCollapsed ? "items-center justify-center" : "items-start"
          }`}
        >
          {[
            { to: "/", src: "dashboard", label: "Dashboard" },
            { to: "/vehicle-list", src: "cars", label: "All cars" },
            { to: "/task-list", src: "task", label: "All repairs" },
            { to: "/car-repair", src: "car-repair", label: "Car repairs" },
          ].map((item, index) => (
            <Link key={index} to={item.to} className="w-full">
              <div
                key={index}
                className={`flex items-center gap-4 pl-3 ${
                  isCollapsed ? "pr-0" : "pr-6"
                } py-3 rounded-lg transition-all duration-200 hover:bg-gray-700/50 hover:scale-105 cursor-pointer`}
              >
                <div className="w-8 h-8 flex justify-center">
                  <img
                    src={`icons/menuIcons/${item.src}.svg`}
                    alt={item.label}
                    className="w-6 h-6"
                  />
                </div>

                <span
                  className={`text-white text-lg transition-all duration-300 ${
                    isCollapsed
                      ? "max-w-0 overflow-hidden opacity-0"
                      : "max-w-full opacity-100"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute top-0 right-0 p-2 transform translate-x-1/2 translate-y-1/2 rounded bg-stone-900 transition"
        >
          <svg
            className="w-6 h-6 transform transition-all duration-300"
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
      </div>
    </div>
  );
}
