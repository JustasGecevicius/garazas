import moment from "moment";
import { ClockComponent } from "./Clock";
import { AddNewVehicleButton } from "../buttons/AddNewVehicleButton";
import NavigateButton from "../buttons/NavigateButton";
import { Link } from "react-router";
import { AddNewTaskButton } from "../buttons/AddNewTaskButton";

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
  return (
    <div
      data-layer="menu"
      className="w-64 h-full pl-7 pr-11 pt-7 pb-7 my-5 bg-stone-900 rounded-2xl border-2 border-white flex-col justify-start items-center gap-14 inline-flex"
    >
      <div
        data-layer="Logo"
        className="Logo w-44 justify-start items-center gap-2.5 inline-flex"
      >
        <div
          data-layer="Group 1171275873"
          className="Group1171275873 w-10 h-10 relative"
        >
          <div
            data-layer="Group 1171275871"
            className="Group1171275871 w-10 h-10 left-0 top-0 absolute"
          >
            <div
              data-layer="Ellipse 3246"
              className="Ellipse3246 w-10 h-10 left-0 top-0 absolute rounded-full border border-white"
            />
            <div
              data-layer="Rectangle 41958"
              className="Rectangle41958 w-3.5 h-3.5 left-[6.67px] top-[6.67px] absolute bg-sky-700 rounded-tl-2xl"
            />
            <div
              data-layer="Rectangle 41960"
              className="Rectangle41960 w-3.5 h-3.5 left-[33.33px] top-[33.33px] absolute origin-top-left -rotate-180 bg-sky-700 rounded-tl-2xl"
            />
            <div
              data-layer="Rectangle 41959"
              className="Rectangle41959 w-3.5 h-3.5 left-[33.33px] top-[6.67px] absolute origin-top-left rotate-90 bg-white rounded-tl-2xl"
            />
            <div
              data-layer="Rectangle 41961"
              className="Rectangle41961 w-3.5 h-3.5 left-[6.67px] top-[33.33px] absolute origin-top-left -rotate-90 bg-white rounded-tl-2xl"
            />
          </div>
          <div
            data-layer="Group 1171275872"
            className="Group1171275872 w-7 h-7 left-[6.67px] top-[6.67px] absolute"
          >
            <div
              data-layer="Ellipse 3246"
              className="Ellipse3246 w-7 h-7 left-0 top-0 absolute rounded-full border border-white"
            />
            <div
              data-layer="Rectangle 41958"
              className="Rectangle41958 w-2 h-2 left-[4.44px] top-[4.44px] absolute bg-sky-700 rounded-tl-2xl"
            />
            <div
              data-layer="Rectangle 41960"
              className="Rectangle41960 w-2 h-2 left-[22.22px] top-[22.22px] absolute origin-top-left -rotate-180 bg-sky-700 rounded-tl-2xl"
            />
            <div
              data-layer="Rectangle 41959"
              className="Rectangle41959 w-2 h-2 left-[22.22px] top-[4.44px] absolute origin-top-left rotate-90 bg-white rounded-tl-2xl"
            />
            <div
              data-layer="Rectangle 41961"
              className="Rectangle41961 w-2 h-2 left-[4.44px] top-[22.22px] absolute origin-top-left -rotate-90 bg-white rounded-tl-2xl"
            />
          </div>
        </div>
        <div
          data-layer="Garažas"
          className="GaraAs text-white text-2xl font-normal font-['Josefin Sans']"
        >
          Garažas
        </div>
      </div>

      <div
        data-layer="button"
        className="Button w-44 h-12 pl-1.5 pr-5 py-1 rounded-3xl justify-start items-center gap-2.5 inline-flex"
      >
        <div
          data-svg-wrapper
          data-layer="Frame 1171275840"
          className="Frame1171275840"
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="34" height="34" rx="17" fill="#0066B1" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 8C17.5523 8 18 8.44772 18 9V16H25C25.5523 16 26 16.4477 26 17C26 17.5523 25.5523 18 25 18H18V25C18 25.5523 17.5523 26 17 26C16.4477 26 16 25.5523 16 25V18H9C8.44772 18 8 17.5523 8 17C8 16.4477 8.44772 16 9 16H16V9C16 8.44772 16.4477 8 17 8Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          data-layer="Add new car"
          className="AddNewCar text-white text-sm font-normal font-['Josefin Sans']"
        >
          Add new car
        </div>
      </div>
      <div
        data-layer="ietms-wraper"
        className="IetmsWraper flex-col justify-start items-start gap-2.5 flex"
      >
        <div
          data-layer="expanded tab"
          className="ExpandedTab w-44 pl-4 pr-6 py-3 justify-start items-center gap-4 inline-flex"
        >
          <div data-svg-wrapper data-layer="icons" className="Icons">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.0347 2.03468C13.6675 1.40194 14.5607 1.14581 15.5834 1.14581H17.4167C18.4393 1.14581 19.3326 1.40194 19.9653 2.03468C20.5981 2.66742 20.8542 3.56067 20.8542 4.58331V6.41665C20.8542 7.43929 20.5981 8.33254 19.9653 8.96528C19.3326 9.59802 18.4393 9.85415 17.4167 9.85415H15.5834C14.5607 9.85415 13.6675 9.59802 13.0347 8.96528C12.402 8.33254 12.1459 7.43929 12.1459 6.41665V4.58331C12.1459 3.56067 12.402 2.66742 13.0347 2.03468ZM14.007 3.00695C13.7231 3.29088 13.5209 3.77262 13.5209 4.58331V6.41665C13.5209 7.22734 13.7231 7.70908 14.007 7.99301C14.2909 8.27694 14.7727 8.47915 15.5834 8.47915H17.4167C18.2274 8.47915 18.7091 8.27694 18.9931 7.99301C19.277 7.70908 19.4792 7.22734 19.4792 6.41665V4.58331C19.4792 3.77262 19.277 3.29088 18.9931 3.00695C18.7091 2.72302 18.2274 2.52081 17.4167 2.52081H15.5834C14.7727 2.52081 14.2909 2.72302 14.007 3.00695Z"
                fill="#F1F1F1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.03474 13.0347C2.66748 12.4019 3.56073 12.1458 4.58337 12.1458H6.41671C7.43935 12.1458 8.33261 12.4019 8.96534 13.0347C9.59808 13.6674 9.85421 14.5607 9.85421 15.5833V17.4166C9.85421 18.4393 9.59808 19.3325 8.96534 19.9653C8.33261 20.598 7.43935 20.8541 6.41671 20.8541H4.58337C3.56073 20.8541 2.66748 20.598 2.03474 19.9653C1.402 19.3325 1.14587 18.4393 1.14587 17.4166V15.5833C1.14587 14.5607 1.402 13.6674 2.03474 13.0347ZM3.00701 14.0069C2.72308 14.2909 2.52087 14.7726 2.52087 15.5833V17.4166C2.52087 18.2273 2.72308 18.7091 3.00701 18.993C3.29094 19.2769 3.77268 19.4791 4.58337 19.4791H6.41671C7.2274 19.4791 7.70914 19.2769 7.99307 18.993C8.277 18.7091 8.47921 18.2273 8.47921 17.4166V15.5833C8.47921 14.7726 8.277 14.2909 7.99307 14.0069C7.70914 13.723 7.2274 13.5208 6.41671 13.5208H4.58337C3.77268 13.5208 3.29094 13.723 3.00701 14.0069Z"
                fill="#F1F1F1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.50004 2.52081C3.85469 2.52081 2.52087 3.85463 2.52087 5.49998C2.52087 7.14533 3.85469 8.47915 5.50004 8.47915C7.14539 8.47915 8.47921 7.14533 8.47921 5.49998C8.47921 3.85463 7.14539 2.52081 5.50004 2.52081ZM1.14587 5.49998C1.14587 3.09524 3.0953 1.14581 5.50004 1.14581C7.90478 1.14581 9.85421 3.09524 9.85421 5.49998C9.85421 7.90472 7.90478 9.85415 5.50004 9.85415C3.0953 9.85415 1.14587 7.90472 1.14587 5.49998Z"
                fill="#F1F1F1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.5 13.5208C14.8547 13.5208 13.5209 14.8546 13.5209 16.5C13.5209 18.1453 14.8547 19.4791 16.5 19.4791C18.1454 19.4791 19.4792 18.1453 19.4792 16.5C19.4792 14.8546 18.1454 13.5208 16.5 13.5208ZM12.1459 16.5C12.1459 14.0952 14.0953 12.1458 16.5 12.1458C18.9048 12.1458 20.8542 14.0952 20.8542 16.5C20.8542 18.9047 18.9048 20.8541 16.5 20.8541C14.0953 20.8541 12.1459 18.9047 12.1459 16.5Z"
                fill="#F1F1F1"
              />
            </svg>
          </div>
          <div
            data-layer="Dashboard"
            className="Dashboard text-white text-sm font-normal font-['Josefin Sans']"
          >
            Dashboard
          </div>
        </div>
        <div
          data-layer="expanded tab"
          className="ExpandedTab w-44 pl-4 pr-6 py-3 justify-start items-center gap-4 inline-flex"
        >
          <div data-svg-wrapper data-layer="icons" className="Icons">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.734 10.5318L10.841 13.2167C10.8042 13.3273 10.7421 13.4279 10.6597 13.5103L10.2987 13.8713V17.0036C10.4168 16.926 10.5581 16.8809 10.71 16.8809H18.8389C18.9907 16.8809 19.132 16.926 19.2501 17.0036V13.8713L18.8892 13.5103C18.8067 13.4278 18.7446 13.3273 18.7078 13.2167L17.8137 10.5283L17.813 10.5262C17.7586 10.3611 17.6012 10.2462 17.4221 10.2462H12.1267C11.9542 10.2462 11.7952 10.3555 11.734 10.5318ZM18.0889 18.3809H11.46V18.7921C11.46 19.2063 11.1242 19.5421 10.71 19.5421H9.54871C9.13449 19.5421 8.79871 19.2063 8.79871 18.7921V13.8045C8.79871 13.4393 8.94791 13.1136 9.17263 12.8764L9.18676 12.8619L9.47364 12.575L10.3137 10.0493C10.5783 9.2746 11.3013 8.74615 12.1267 8.74615H17.4221C18.2413 8.74615 18.9778 9.2694 19.2373 10.0559C19.2374 10.0563 19.2376 10.0567 19.2377 10.0571L20.0752 12.575L20.3621 12.8619C20.6182 13.118 20.7501 13.4562 20.7501 13.8045V18.7921C20.7501 19.2063 20.4144 19.5421 20.0001 19.5421H18.8389C18.4247 19.5421 18.0889 19.2063 18.0889 18.7921V18.3809Z"
                fill="#F1F1F1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.18544 6.4675L3.29242 9.15235C3.25506 9.26469 3.19162 9.36659 3.10731 9.44971L2.75012 9.80187V12.9334C2.86822 12.8559 3.00953 12.8107 3.16139 12.8107H9.60064C10.0149 12.8107 10.3506 13.1465 10.3506 13.5607C10.3506 13.9749 10.0149 14.3107 9.60064 14.3107H3.91139V14.722C3.91139 15.1362 3.57561 15.472 3.16139 15.472H2.00012C1.58591 15.472 1.25012 15.1362 1.25012 14.722V9.73433C1.25012 9.36919 1.39933 9.04347 1.62404 8.80627C1.62991 8.80008 1.63588 8.79399 1.64195 8.788L1.92594 8.50801L2.76515 5.98493C3.02967 5.21027 3.75267 4.68182 4.57814 4.68182H9.87354C10.6927 4.68182 11.4292 5.20508 11.6887 5.99155C11.6889 5.99195 11.689 5.99234 11.6891 5.99273L12.5266 8.51068L12.8135 8.79756C12.946 8.93003 13.0234 9.0675 13.0701 9.16086C13.2554 9.53134 13.1052 9.98185 12.7347 10.1671C12.3657 10.3516 11.9173 10.2033 11.7307 9.83606L11.3406 9.44597C11.2581 9.36352 11.1961 9.26298 11.1593 9.15235L10.2651 6.464L10.2644 6.46186C10.21 6.29675 10.0527 6.18182 9.87354 6.18182H4.57814C4.40562 6.18182 4.24663 6.29118 4.18544 6.4675Z"
                fill="#F1F1F1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.1316 3.2782C11.9525 3.2782 11.7952 3.39312 11.7408 3.55823L11.7398 3.56141L11.0082 5.7504C10.8769 6.14325 10.452 6.35529 10.0591 6.22399C9.66624 6.09269 9.45421 5.66778 9.58551 5.27493L10.3166 3.08733C10.5763 2.30118 11.3127 1.7782 12.1316 1.7782H17.427C18.2463 1.7782 18.983 2.30164 19.2424 3.08834M19.2424 3.08834L20.0749 5.6076L20.3612 5.89393C20.6173 6.15008 20.7493 6.48827 20.7493 6.83651V11.8242C20.7493 12.2384 20.4135 12.5742 19.9993 12.5742H19.0296C18.6154 12.5742 18.2796 12.2384 18.2796 11.8242C18.2796 11.41 18.6154 11.0742 19.0296 11.0742H19.2493V6.90331L18.8883 6.54234C18.8055 6.45954 18.7432 6.35851 18.7065 6.24733L17.8181 3.55899C17.7638 3.39388 17.6062 3.2782 17.427 3.2782H12.1316M19.3005 6.95459C19.3006 6.9547 19.3004 6.95448 19.3005 6.95459Z"
                fill="#F1F1F1"
              />
            </svg>
          </div>
          <div
            data-layer="Dashboard"
            className="Dashboard text-white text-sm font-normal font-['Josefin Sans']"
          >
            All Cars
          </div>
        </div>
        <div
          data-layer="expanded tab"
          className="ExpandedTab w-44 pl-4 pr-6 py-3 justify-start items-center gap-4 inline-flex"
        >
          <div data-svg-wrapper data-layer="icons" className="Icons">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.33337 18.3542C9.33337 17.9745 9.64118 17.6667 10.0209 17.6667H19.1875C19.5672 17.6667 19.875 17.9745 19.875 18.3542C19.875 18.7339 19.5672 19.0417 19.1875 19.0417H10.0209C9.64118 19.0417 9.33337 18.7339 9.33337 18.3542Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.33337 11.9375C9.33337 11.5578 9.64118 11.25 10.0209 11.25H19.1875C19.5672 11.25 19.875 11.5578 19.875 11.9375C19.875 12.3172 19.5672 12.625 19.1875 12.625H10.0209C9.64118 12.625 9.33337 12.3172 9.33337 11.9375Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.33337 5.52081C9.33337 5.14112 9.64118 4.83331 10.0209 4.83331H19.1875C19.5672 4.83331 19.875 5.14112 19.875 5.52081C19.875 5.90051 19.5672 6.20831 19.1875 6.20831H10.0209C9.64118 6.20831 9.33337 5.90051 9.33337 5.52081Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.8403 3.20136C7.10879 3.46985 7.10879 3.90515 6.8403 4.17364L4.0903 6.92364C3.82182 7.19212 3.38652 7.19212 3.11803 6.92364L2.20136 6.00697C1.93288 5.73848 1.93288 5.30318 2.20136 5.0347C2.46985 4.76621 2.90515 4.76621 3.17364 5.0347L3.60417 5.46523L5.86803 3.20136C6.13652 2.93288 6.57182 2.93288 6.8403 3.20136Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.8403 9.61805C7.10879 9.88654 7.10879 10.3218 6.8403 10.5903L4.0903 13.3403C3.82182 13.6088 3.38652 13.6088 3.11803 13.3403L2.20136 12.4237C1.93288 12.1552 1.93288 11.7199 2.20136 11.4514C2.46985 11.1829 2.90515 11.1829 3.17364 11.4514L3.60417 11.8819L5.86803 9.61805C6.13652 9.34957 6.57182 9.34957 6.8403 9.61805Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.8403 16.0347C7.10879 16.3032 7.10879 16.7385 6.8403 17.0069L4.0903 19.7569C3.82182 20.0254 3.38652 20.0254 3.11803 19.7569L2.20136 18.8403C1.93288 18.5718 1.93288 18.1365 2.20136 17.868C2.46985 17.5995 2.90515 17.5995 3.17364 17.868L3.60417 18.2985L5.86803 16.0347C6.13652 15.7662 6.57182 15.7662 6.8403 16.0347Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            data-layer="Dashboard"
            className="Dashboard text-white text-sm font-normal font-['Josefin Sans']"
          >
            All repairs
          </div>
        </div>
        <div
          data-layer="expanded tab"
          className="ExpandedTab w-44 pl-4 pr-6 py-3 justify-start items-center gap-4 inline-flex"
        >
          <div data-svg-wrapper data-layer="icons" className="Icons">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9941 14.7593L16.6302 12.6883C16.1793 12.2979 15.579 12.9789 16.0276 13.376L18.3859 15.4421C20.4103 17.4033 17.5827 20.3812 15.5187 18.4589L11.5576 14.138L13.9952 11.4732C14.5035 11.5932 15.0269 11.6358 15.548 11.6011C18.5864 11.4086 20.7156 8.21941 19.7699 5.33779C19.698 5.09598 19.4438 4.95832 19.2019 5.03019C19.119 4.9571 17.3944 6.79109 17.3109 6.84529C17.1385 7.01097 16.8661 7.01097 16.6936 6.84529L15.1537 5.30672C14.9837 5.13618 14.9837 4.86026 15.1537 4.68971L16.8545 2.99156C17.0324 2.81309 17.0325 2.52438 16.8539 2.34653C14.0092 1.0991 10.5558 3.39234 10.3949 6.464C10.3602 6.98234 10.404 7.50251 10.5241 8.00806L10.2072 8.29738L7.80618 5.89633C7.71477 5.80557 7.66297 5.68193 7.66358 5.5528C7.68856 5.04116 7.66297 4.44912 7.25345 4.08123L5.74824 2.57615C5.32654 2.17415 4.66352 2.17415 4.24181 2.57615L2.45323 4.36385C2.03823 4.77986 2.03823 5.45351 2.45323 5.86953L3.95905 7.3746C4.22109 7.63773 4.57759 7.78513 4.94932 7.78391C5.18699 7.79548 5.60138 7.72056 5.77567 7.92705C6.41188 8.56538 7.76352 9.91208 8.40704 10.5571C8.58316 10.7277 8.86287 10.7593 9.05118 10.5864L11.3431 8.49533C11.4723 8.37778 11.5229 8.19627 11.4735 8.02876C11.3303 7.54332 11.2749 7.03716 11.3084 6.53222C11.4607 4.37481 13.448 2.70589 15.6016 2.95075L14.5083 4.04712C13.9818 4.57398 13.9818 5.42793 14.5083 5.95541L16.0477 7.49459C16.5821 8.00501 17.4237 8.00501 17.9581 7.49459L19.055 6.39822C19.2994 8.54832 17.637 10.5328 15.4809 10.6905C14.9727 10.724 14.4626 10.6668 13.9745 10.5218C13.8051 10.4694 13.621 10.52 13.5022 10.6509L6.33509 18.4418C4.45084 20.3989 1.60129 17.5477 3.55015 15.6595L5.8232 13.5319L7.17728 12.2973C7.36924 12.1335 7.39179 11.8447 7.22786 11.6535C7.05784 11.4531 6.74887 11.4391 6.56118 11.623L5.20832 12.8564L2.93405 14.9834C0.965084 16.709 2.3344 20.1059 4.94445 19.9975C5.73301 19.9828 6.48013 19.643 7.00969 19.0589L10.9385 14.8159L14.7856 19.0138L14.8715 19.1045C17.86 21.8698 21.9076 17.5934 18.9941 14.7593ZM8.75988 9.61789C8.17608 9.03377 7.00482 7.86431 6.42224 7.28262C6.16019 7.01889 5.80309 6.87088 5.43136 6.87209C5.20039 6.85626 4.77443 6.93849 4.60501 6.72835L3.0998 5.22328C3.04191 5.16724 3.0413 5.06613 3.0998 5.01009L4.88777 3.2224C4.94689 3.16393 5.04256 3.16393 5.10167 3.2224L6.60749 4.72808C6.81591 4.89619 6.73425 5.32317 6.74948 5.5528C6.74826 5.92434 6.89635 6.28066 7.16022 6.54258L9.53138 8.91378L8.75988 9.61789Z"
                fill="white"
              />
              <path
                d="M4 16.9196C4.02053 18.1457 5.84507 18.1457 5.8656 16.9196C5.84507 15.6935 4.02053 15.6935 4 16.9196Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            data-layer="Dashboard"
            className="Dashboard text-white text-sm font-normal font-['Josefin Sans']"
          >
            Car repairs
          </div>
        </div>
      </div>
      <div data-svg-wrapper data-layer="icons" className="Icons">
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_18_3432)">
            <rect
              x="6"
              y="6"
              width="30"
              height="30"
              rx="15"
              fill="white"
              shape-rendering="crispEdges"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.3963 16.6904C23.1975 16.4971 22.8751 16.4971 22.6763 16.6904L18.6036 20.65C18.5081 20.7428 18.4545 20.8687 18.4545 21C18.4545 21.1313 18.5081 21.2571 18.6036 21.35L22.6763 25.3096C22.8751 25.5029 23.1975 25.5029 23.3963 25.3096C23.5951 25.1163 23.5951 24.8029 23.3963 24.6096L19.6836 21L23.3963 17.3904C23.5951 17.1971 23.5951 16.8837 23.3963 16.6904Z"
              fill="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_18_3432"
              x="0"
              y="0"
              width="46"
              height="46"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="2" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_18_3432"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_18_3432"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
