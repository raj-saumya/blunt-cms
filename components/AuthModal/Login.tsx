import { useState } from "react";
import { useStore } from "../../store/loginStore";
import { Input, LoadingIcon } from "./Shared";
import type { FC } from "react";

interface ILogin {
  username: string;
  setUsername: any;
  setLoginVisibility: any;
  setModalVisibilty: any;
}

const Login: FC<ILogin> = ({
  username,
  setUsername,
  setLoginVisibility,
  setModalVisibilty,
}) => {
  const isLoading = useStore((state) => state.$isLoading);
  const loginUser = useStore((state) => state.loginUser);
  const [password, setPassword] = useState<string>("");

  const isBtnDisabled = (): boolean => {
    return !(username !== "" && password !== "");
  };

  const handleLogin = async () => {
    await loginUser({
      username,
      password,
    });
    setModalVisibilty(false);
  };

  return (
    <>
      {/* Modal body */}
      <div className="flex flex-col mt-8 mb-10">
        <Input
          imgSrc="/images/icon-email.svg"
          imgAlt="icon-email"
          type="text"
          placeholder="Enter Username"
          value={username}
          setValue={setUsername}
          className="mb-4"
        />
        <Input
          imgSrc="/images/icon-lock.svg"
          imgAlt="icon-lock"
          type="password"
          placeholder="Enter Password"
          value={password}
          setValue={setPassword}
        />
      </div>
      {/* Modal footer */}
      <button
        className="flex justify-center font-spline text-sm w-full text-white bg-sky-500 hover:bg-sky-600 px-4 py-2 ml-auto rounded-md mb-10 disabled:bg-sky-900"
        disabled={isLoading || isBtnDisabled()}
        onClick={handleLogin}
      >
        {isLoading ? <LoadingIcon /> : "Login"}
      </button>
      <div className="flex justify-center">
        <label className="font-spline text-xs mr-1">
          {"Don't have an accout yet?"}
        </label>
        <label
          className="font-spline text-xs cursor-pointer text-sky-600 underline underline-offset-2 hover:text-sky-800"
          onClick={() => setLoginVisibility(false)}
        >
          Sign Up
        </label>
      </div>
    </>
  );
};

export default Login;
