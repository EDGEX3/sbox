import "@/css/index.css";
import Loading from "@/sbox/comman/macro/Loading";
import Swindow from "@/sbox/Swindow";
import { LoadingProvider } from "@/states/context/LoadingContext";
import { ThemeProvider } from "./states/context/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <Loading />
        <Swindow />
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
