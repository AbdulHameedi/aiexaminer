import { useContext } from "react";
import { AppDispatchContext } from "../context/AppContext";

export const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (!context)
    throw new Error("useAppDispatch must be used within a AppProvider");
  return context;
};
