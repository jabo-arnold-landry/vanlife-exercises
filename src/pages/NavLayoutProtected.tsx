import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserStorage } from "../Hooks/useUserProvider";

function NavLayoutProtected() {
  const { session } = useContext(UserStorage);
  const isUserLoggedIn = session.loggedIn;
  
  return (
    <>
      {isUserLoggedIn ? (
        <Outlet></Outlet>
      ) : (
        <Navigate to="login" replace={true} />
      )}
    </>
  );
}

export default NavLayoutProtected;
