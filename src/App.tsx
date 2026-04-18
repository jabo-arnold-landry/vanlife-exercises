import { lazy } from "react";
const SignUp = lazy(() => import("./pages/SignUp"));
function App() {
  return (
    <>
      <h1>vanlife exercises</h1>
      <SignUp />
    </>
  );
}

export default App;
