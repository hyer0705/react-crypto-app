import { Outlet } from "react-router-dom";

export default function Coin() {
  return (
    <div>
      <h1>This is Coin Detail Component. Using /:coinId route.</h1>
      <Outlet />
    </div>
  );
}
