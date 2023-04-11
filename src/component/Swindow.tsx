import { useContext, useEffect } from "react";
import { LoadingContext } from "../redux/context/LoadingContext";
import Dashboard from "./dashboard/Dashboard";
import { Tauri_window } from "../Utils/utils";
import { invoke } from "@tauri-apps/api";
const Swindow = () => {
  const { setLoading } = useContext(LoadingContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading({
        display: "hidden",
      });
     (Tauri_window)?
        invoke("close_splashscreen")
      :null;
    }, 3000);
  }, []);
  return (
    <div className="Main-Component">
      <Dashboard />
    </div>
  );
}; 

export default Swindow;

