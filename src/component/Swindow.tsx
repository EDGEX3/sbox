import { useContext, useEffect } from "react";
import { LoadingContext } from "../redux/context/LoadingContext";
import Navbar from "./comman/Navbar";
import Dashboard from "./dashboard/Dashboard";
import Workspace from "./workspace/Workspace";
import { invoke } from "@tauri-apps/api";
const Swindow = () => {
  const  {setLoading} = useContext(LoadingContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading({
        display: "none",
      });
      invoke('close_splashscreen');
    }, 2000);
  }, []);
  return (
    <div className="Main-Component">
      <Navbar />
      <Dashboard />
      <Workspace />
    </div>
  );
};

export default Swindow;
