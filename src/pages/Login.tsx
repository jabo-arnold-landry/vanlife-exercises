import { useActionState } from "react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { useNavigate } from "react-router-dom";
import useStorage from "../Hooks/useStorage";

function Login() {
  const [data, action, isLoading] = useActionState(createUsers, null);
  const [user, setUser] = useStorage<Record<string, boolean>>("isLoggedin", {});
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

      setUser((prev) => ({
        ...prev,
        loggedIn: !prev.loggedIn,
      }));

      navigation("/", { replace: true });
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
