// import { ReactComponent as DashIcon } from "../assets/Icons/DashIcon.svg";

const Sidenav = () => {
  return (
    <div className="flex flex-col justify-between h-full py-4 px-6">
      <div className="flex flex-col justify-between h-[25%]">
        <h1>CommonCents</h1>
        <div className="flex flex-col gap-2">
          {/* <DashIcon /> */}
          <p>Hello</p>
          <p>Bye</p>
          <p>Die</p>
        </div>
      </div>
      <div>Bye</div>
    </div>
  );
};

export default Sidenav;
