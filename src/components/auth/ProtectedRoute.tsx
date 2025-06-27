import { useAppState } from "../../hooks/useAppState";
import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "../layout/Sidebar";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAppState();
  return isAuthenticated ? (
      <div className="">
        <Sidebar />
        <div className="pl-[280px]">
          <Outlet />
        </div>
      </div>
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoute;
