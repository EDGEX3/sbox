import { useContext, useEffect } from "react";
import { LoadingContext } from "../redux/context/LoadingContext";
// import Navbar from "./comman/Navbar";
import Dashboard from "./dashboard/Dashboard";
// import Workspace from "./workspace/Workspace";
import { Tauri_window } from "../Utils/utils";
import { invoke } from "@tauri-apps/api";
const Swindow = () => {
  const { setLoading } = useContext(LoadingContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading({
        display: "none",
      });
      if (Tauri_window) {
        invoke("close_splashscreen");
      }
    }, 2000);
  }, []);
  return (
    <div className="Main-Component">
      <Dashboard />
    </div>
  );
};

export default Swindow;
function loadable(arg0: () => Promise<any>, arg1: { fallback: any }) {
  throw new Error("Function not implemented.");
}
