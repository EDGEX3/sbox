import { useContext, useEffect } from "react";
import { LoadingContext } from "@/states/context/LoadingContext";
import * as utils from "@/Utils/utils";
import { invoke } from "@tauri-apps/api";
import Dashboard from "@/component/dashboard/Dashboard";
const Swindow = () => {
  //splash screen context
  const { setLoading } = useContext(LoadingContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading({
        display: true,
      });
     (utils.Tauri_window)?
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

