import Footer from "../components/Footer";
import Anchor from "../components/UI/Anchor";
import { Outlet } from "react-router-dom";
function NavLayout() {
  return (
    <>
      <nav>
        <h1>
          {" "}
          <Anchor to="/">#Vanlife</Anchor>
        </h1>
        <Anchor to="about">about</Anchor>
        <Anchor to="vans">vans</Anchor>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
}

export default NavLayout;
