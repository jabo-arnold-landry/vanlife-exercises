import { Outlet } from "react-router-dom";
import Anchor from "../components/UI/Anchor";
function Host() {
  return (
    <>
      <nav className="flex flex-wrap gap-10 text-links-color text-xl">
        <Anchor to="host">dashboard</Anchor>
        <Anchor to="host">income</Anchor>
        <Anchor to="vans">vans</Anchor>
        <Anchor to="host">reviews</Anchor>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Host;
