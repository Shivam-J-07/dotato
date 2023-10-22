import { NavLink } from "react-router-dom";

const Navitem = ({ Icon, label, path }: { Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; label: string, path: string }) => {
  return (
    <NavLink
      to={path}
    >
      <div className="flex flex-row gap-2">
        <Icon className="w-6 mr-2" />
        <span>{label}</span>
      </div>
    </NavLink>
  );
};

export default Navitem;
