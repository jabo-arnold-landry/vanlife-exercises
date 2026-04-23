import { useActionState, useContext } from "react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { useNavigate } from "react-router-dom";
import { UserStorage } from "../Hooks/useUserProvider";
import { Link } from "react-router-dom";

function Login() {
  const [data, action, isLoading] = useActionState(createUsers, null);
  const { session, setSession } = useContext(UserStorage);
  const navigation = useNavigate();

  function createUsers(data, formData: FormData) {
    const userCredentials = Object.fromEntries(formData);

    import("../MockData/Data").then((res) => {
      const isExist = res.Users.find(
        (user) => user.email === userCredentials.email,
      );

      if (!isExist) {
        alert("The user is not found");
        navigation("/signup");
        return;
      }

      setSession({
        loggedIn: true,
      });

      navigation("/host", { replace: true });
    });
  }

  return (
    <>
      <h2 className="font-bold text-4xl text-center mb-10">
        Sign in to your account
      </h2>
      <form
        action={action}
        className="flex flex-col max-inline-2xl my-auto mx-auto"
      >
        <Input type="text" name="names" placeholder="Email address" />
        <Input type="text" name="email" placeholder="Password" />

        <Button
          className="my-4 place-self-stretch"
          color="bgOrange"
          sizes="authSize"
          disabled={isLoading}
        >
          Login
        </Button>
      </form>
      <p className="text-center font-text-font text-lg">
        don't have an account create one using this{" "}
        <Link to="/signup" className="text-orange-600">
          link.
        </Link>
      </p>
    </>
  );
}

export default Login;
