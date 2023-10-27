import { createBrowserRouter } from "react-router-dom";
import Coins from "./routes/Coins";
import App from "./App";
import Coin from "./routes/Coin";
import NotFound from "./NotFound";
import Price from "./routes/Price";
import Chart from "./routes/Chart";
export const router = createBrowserRouter(
  [
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
              element: <Price />,
            },
            {
              path: "chart",
              element: <Chart />,
            },
          ],
        },
      ],
    },
  ],
  { basename: import.meta.env.PUBLIC_URL }
);
