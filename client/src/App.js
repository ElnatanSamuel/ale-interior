import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/BrowserRouter/Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
