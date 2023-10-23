import { NavLink } from "react-router-dom";

const Navitem = ({
  Icon,
  label,
  path,
}: {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label: string;
  path: string;
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? "bg-gray-100/40 rounded-r-xl -ml-8 pl-8 " : ""
      }
    >
      <div className="flex flex-row gap-2 w-full">
        <Icon className="w-6 mr-2" />
        <span className="py-1">{label}</span>
      </div>
    </NavLink>
  );
};

export default Navitem;
