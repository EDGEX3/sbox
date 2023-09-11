import { useContext, useEffect } from "react";
import { LoadingContext } from "@/states/context/LoadingContext";
import * as utils from "@/Utils/utils";
import { invoke } from "@tauri-apps/api";
import Dashboard from "@/sbox/dashboard/Dashboard";
const Swindow = () => {
  //splash screen context
  const { loading,setLoading } = useContext(LoadingContext);
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
    (loading.display)?
    <div className="Main-Component">
      <Dashboard />
    </div>:null
  );
}; 

export default Swindow;

