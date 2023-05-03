import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Content() {
  return (
    <main className="border border-border w-full">
      <NavBar />
      <Outlet />
    </main>
  )
}