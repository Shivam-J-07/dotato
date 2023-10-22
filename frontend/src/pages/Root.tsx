import { Outlet } from "react-router-dom";
import Sidenav from "../components/Sidenav";

const Root = () => {
  return (
    <div className="bg-gradient-to-t from-secondary to-primary h-screen flex flex-row">
      <Sidenav />
      <div className=" bg-white/50 w-full m-6 p-8 rounded-xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
