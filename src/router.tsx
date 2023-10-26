import { createBrowserRouter } from "react-router-dom";
import Coins from "./routes/Coins";
import App from "./App";
import NotFound from "./notfound";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
    ],
  },
]);
