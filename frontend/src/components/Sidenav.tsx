import Navitem from "./Navitem";
import { NAV_ITEMS } from "../constants/navItems";

const Sidenav = () => {
  return (
    <div className="flex flex-col justify-between h-full w-[20vw] py-6 px-8 text-lg">
      <div className="flex flex-col justify-between h-[30%]">
        <h1>CommonCents</h1>
        <div className="flex flex-col gap-4">
          {NAV_ITEMS.map((item) => {
            if (item.label !== "Settings") {
              return <Navitem label={item.label} Icon={item.icon} path={item.path} />;
            }
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {NAV_ITEMS.map((item) => {
          if (item.label === "Settings") {
            return <Navitem label={item.label} Icon={item.icon} path={item.path} />;
          }
        })}
        <p className="text-center">dotato &copy; 2023 </p>
      </div>
    </div>
  );
};

export default Sidenav;
