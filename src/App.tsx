import "./App.css";
import { ContextProvider } from "./context/context";
import AppRoutes from "./Routes/router";


function App() {
  return (
    <ContextProvider>
      <AppRoutes />
    </ContextProvider>
  );
}

export default App;
