import { useActionState } from "react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { redirect, useNavigate } from "react-router-dom";

function Login() {
  const [data, action, isLoading] = useActionState(createUsers, null);
  const navigation = useNavigate();

  function createUsers(data, formData: FormData) {
    const userCredentials = Object.fromEntries(formData);

    import("../MockData/Data").then((res) => {
      const isExist = res.Users.find(
        (user) => user.email === userCredentials.email,
      );

      if (isExist) {
        alert("The user is not found");
        navigation("/signup");
        return;
      }
      redirect("/");
    });
  }

  return (
    <>
      <form action={action}>
        <Input type="text" name="names" placeholder="names goes here..." />
        <Input type="text" name="email" placeholder="input your email..." />
        <Button disabled={isLoading}>Create</Button>
      </form>
    </>
  );
}

export default Login;
