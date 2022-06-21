import { useState } from "react";
import { useStore } from "../../store/loginStore";
import { Input, LoadingIcon } from "./Shared";
import type { FC } from "react";

interface ISignUp {
  username: string;
  setUsername: any;
  setLoginVisibility: any;
  setModalVisibilty: any;
}

const SignUp: FC<ISignUp> = ({
  setLoginVisibility,
  username,
  setUsername,
  setModalVisibilty,
}) => {
  const isLoading = useStore((state) => state.$isLoading);
  const signUpUser = useStore((state) => state.signUpUser);
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  const isBtnDisabled = (): boolean => {
    return !(
      username !== "" &&
      password !== "" &&
      password2 !== "" &&
      password === password2
    );
  };

  const handleSignUp = async () => {
    await signUpUser({
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
          className="mb-4"
        />
        <Input
          imgSrc="/images/icon-lock.svg"
          imgAlt="icon-lock"
          type="password"
          placeholder="Confirm Password"
          value={password2}
          setValue={setPassword2}
          className="mb-4"
        />
        <label
          className={`font-spline text-sm text-red-600 ${
            password !== password2 ? "opacity-100" : "opacity-0"
          }`}
        >
          {"Passwords don't match"}
        </label>
      </div>
      {/* Modal footer */}
      <button
        className="flex justify-center font-spline text-sm w-full text-white bg-sky-500 hover:bg-sky-600 px-4 py-2 ml-auto rounded-md mb-10 disabled:bg-sky-900"
        disabled={isLoading || isBtnDisabled()}
        onClick={handleSignUp}
      >
        {isLoading ? <LoadingIcon /> : "Login"}
      </button>
      <div className="flex justify-center">
        <label className="font-spline text-xs mr-1">
          {"Already a member?"}
        </label>
        <label
          className="font-spline text-xs cursor-pointer text-sky-600 underline underline-offset-2 hover:text-sky-800"
          onClick={() => setLoginVisibility(true)}
        >
          Login
        </label>
      </div>
    </>
  );
};

export default SignUp;
