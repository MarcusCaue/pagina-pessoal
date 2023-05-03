import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Content() {
  return (
    <main>
      <NavBar />
      <section>
        <Outlet />
      </section>
    </main>
  )
}