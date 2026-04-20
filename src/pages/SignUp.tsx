import { useActionState } from "react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Anchor from "../components/UI/Anchor";

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
      <form action={action}>
        <Input type="text" name="names" placeholder="names goes here..." />
        <Input type="text" name="email" placeholder="input your email..." />
        <Button disabled={isLoading}>Create</Button>
      </form>
      <p>
        have an account login here <Anchor to="/login">here.</Anchor>
      </p>
    </>
  );
}

export default Login;
