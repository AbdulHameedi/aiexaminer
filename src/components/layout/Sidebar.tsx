import {
  ArrowRight,
  Brain,
  File,
  LayoutDashboard,
  LogOut,
  Upload,
  X,
} from "lucide-react";
import { SidebarProps } from "../../types";
import { Link, useNavigate } from "react-router-dom";
import { useSetSelected } from "../../hooks/useSelected";

const SidebarItems = [
  { name: "Dashboard", icon: <LayoutDashboard />, to: "/" },
  { name: "Upload", icon: <Upload />, to: "upload" },
  { name: "Documents", icon: <File />, to: "documents" },
  { name: "Quiz", icon: <Brain />, to: "quiz" },
  { name: "Sign Out", icon: <LogOut />, to: "/" },
];
export const Sidebar = () => {
  const setSelected = useSetSelected();
  const navigate = useNavigate();
  const handleSignout = (name: string) => {
    if (name == "Sign Out") {
      setSelected("isAuthenticated", false);
      navigate("/");
      localStorage.clear();
    }
  };
  return (
    <div className="w-[280px] shadow-md h-screen bg-white fixed top-0">
      <div className="border border-b flex justify-between py-8 px-6">
        <img src="/logo.svg" alt="logo" />
        <X />
      </div>
      <div className="p-6 flex flex-col gap-6">
        {SidebarItems.map((item, idx) => {
          return (
            <NavItems
              key={idx}
              name={item.name}
              icon={item.icon}
              to={item.to}
              className={item.name == "Sign Out" ? "absolute bottom-10" : ""}
              clickEvent={() => handleSignout(item.name)}
            />
          );
        })}
      </div>
    </div>
  );
};

export const NavItems = ({
  name,
  icon,
  to,
  className,
  clickEvent,
}: SidebarProps) => {
  return (
    <Link to={to} onClick={clickEvent}>
      <div
        className={`flex justify-between p-3 rounded-md cursor-pointer hover:bg-gray-100 transition-colors duration-200 ${className}`}
      >
        <div className="flex gap-3">
          {icon}
          <p>{name}</p>
        </div>
        {name !== "Sign Out" && <ArrowRight />}
      </div>
    </Link>
  );
};
