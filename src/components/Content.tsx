import { Outlet } from "react-router-dom";
import NavBar     from "./NavBar";

export default function Content() {
  return (
    <main className="borda flex flex-col">
      <NavBar />
      <Outlet />
    </main>
  )
}