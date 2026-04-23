import Footer from "../components/Footer";
import Anchor from "../components/UI/Anchor";
import { Link, Outlet } from "react-router-dom";
import { UserStorage } from "../Hooks/useUserProvider";
import { useContext } from "react";
function NavLayout() {
  const {session} = useContext(UserStorage)
  return (
    <>
      <nav className="flex justify-between py-6 px-10 items-center">
        <h1>
          {" "}
          <Link to="/" className="text-3xl font-black">
            #Vanlife
          </Link>
        </h1>
        <div className="flex flex-wrap gap-10 text-links-color text-xl">
          {session.loggedIn && <Anchor to="host">host</Anchor>}
          <Anchor to="about">about</Anchor>
          <Anchor to="vans">vans</Anchor>
          {session.loggedIn && <Anchor to="profile">profile</Anchor>}
        </div>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
}

export default NavLayout;
