import { createBrowserRouter } from "react-router-dom";
import Coins from "./routes/Coins";
import App from "./App";
import NotFound from "./notfound";
import Coin from "./routes/Coin";
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
      {
        path: ":coinId",
        element: <Coin />,
        children: [
          {
            path: "price",
            element: <h1>Test - price route</h1>,
          },
          {
            path: "chart",
            element: <h1>Test - chart</h1>,
          },
        ],
      },
    ],
  },
]);
