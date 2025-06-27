import { ArrowRight, Brain, File, LayoutDashboard, Upload, X } from "lucide-react";
import { SidebarProps } from "../../types";
import { Link } from "react-router-dom";

const SidebarItems = [
  { name: "Dashboard", icon: <LayoutDashboard />, to: "dashboard" },
  { name: "Upload", icon: <Upload />, to: "upload" },
  { name: "Documents", icon: <File />, to: "documents" },
  { name: "Quiz", icon: <Brain />, to: "quiz" },
];
export const Sidebar = () => {
  return (
    <div className="w-[280px] shadow-md h-screen bg-white fixed">
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
            />
          );
        })}
      </div>
    </div>
  );
};

export const NavItems = ({ name, icon, to }: SidebarProps) => {
  return (
    <Link to={to}>
      <div className="flex justify-between p-3 rounded-md cursor-pointer hover:bg-gray-100 transition-colors duration-200">
        <div className="flex gap-3">
          {icon}
          <p>{name}</p>
        </div>
        <ArrowRight />
      </div>
    </Link>
  );
};
