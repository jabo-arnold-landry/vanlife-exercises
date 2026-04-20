import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const NavLayout = lazy(() => import("./pages/NavLayout"));
const AboutPage = lazy(() => import("./pages/About"));
const HomePage = lazy(() => import("./pages/Home"));
const Vans = lazy(() => import("./pages/Vans"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<NavLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
