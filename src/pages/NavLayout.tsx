import Footer from "../components/Footer";
import Anchor from "../components/UI/Anchor";
import { Outlet } from "react-router-dom";
function NavLayout() {
  return (
    <>
      <nav className="flex justify-between py-6 px-10 items-center">
        <h1>
          {" "}
          <Anchor to="/" className="text-3xl font-black">#Vanlife</Anchor>
        </h1>
        <div className="flex flex-wrap gap-10 text-links-color text-xl">
          <Anchor to="about">about</Anchor>
          <Anchor to="vans">vans</Anchor>
        </div>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
}

export default NavLayout;
