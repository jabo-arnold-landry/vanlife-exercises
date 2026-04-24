import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Profile = lazy(() => import("./pages/Profile"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const NavLayout = lazy(() => import("./pages/NavLayout"));
const AboutPage = lazy(() => import("./pages/About"));
const HomePage = lazy(() => import("./pages/Home"));
const Vans = lazy(() => import("./pages/Vans"));
const VansLayout = lazy(() => import("./pages/VansLayout"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const Product = lazy(() => import("./pages/Product"));
const NavLayoutProtected = lazy(() => import("./pages/NavLayoutProtected"));
const Host = lazy(() => import("./pages/Host"));
const AuthLayout = lazy(() => import("./pages/AuthLayout"));
const HostDashboard = lazy(() => import("./pages/HostDashboard"));
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<HomePage />} />

          <Route path="" element={<NavLayoutProtected />}>
            <Route path="/host" element={<Host />}>
              <Route index element={<HostDashboard />}></Route>
            </Route>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/vans" element={<VansLayout />}>
            <Route index element={<Vans />} />
            <Route path=":id" element={<Product />} />
          </Route>

          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="" element={<AuthLayout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
