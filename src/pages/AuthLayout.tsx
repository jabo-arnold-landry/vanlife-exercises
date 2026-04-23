import { Outlet, Link } from "react-router-dom";
import Anchor from "../components/UI/Anchor";
import Footer from "../components/Footer";

function AuthLayout() {
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
          <Anchor to="host">host</Anchor>
          <Anchor to="about">about</Anchor>
          <Anchor to="vans">vans</Anchor>
          <Anchor to="profile">profile</Anchor>
        </div>
      </nav>

      <main className="h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AuthLayout;
