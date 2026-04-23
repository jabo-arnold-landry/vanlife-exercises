import { useActionState } from "react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Anchor from "../components/UI/Anchor";
import { Link } from "react-router-dom";

function Login() {
  const [data, action, isLoading] = useActionState(createUsers, null);
  function createUsers(data, formData: FormData) {
    const userCredentials = Object.fromEntries(formData);

    import("../MockData/Data").then((res) => {
      const isExist = res.Users.find(
        (user) => user.email === userCredentials.email,
      );
      if (isExist) {
        alert("the user is already registerd");
        return;
      }
      res.Users.push(userCredentials as { names: string; email: string });
    });
  }

  return (
    <>
      <h2 className="font-bold text-4xl text-center mb-10">
        Create your account
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
          Create
        </Button>
      </form>
      <p className="text-center font-text-font text-lg">
        have an account login <Link to="/login" className="text-orange-600">here.</Link>
      </p>
    </>
  );
}

export default Login;
