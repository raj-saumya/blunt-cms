import { useContext, useState } from "react";
import Image from "next/image";
import { AuthContext } from "../../context/AuthContext";
import { useStore } from "../../store/loginStore";
import Login from "./Login";
import SignUp from "./SignUp";
import type { FC } from "react";

const AuthModal: FC = () => {
  const isLoading = useStore((state) => state.$isLoading);
  const { visible, setModalVisibilty: showModalVisibilty } =
    useContext(AuthContext);
  const [isLoginVisible, setLoginVisibility] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");

  return visible ? (
    <div className="fixed h-screen w-screen backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <div className="relative bg-white border p-4 rounded-md shadow-md w-[320px]">
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => !isLoading && showModalVisibilty(false)}
        >
          <Image
            src="/images/icon-close-dark.svg"
            width={20}
            height={20}
            objectFit="fill"
            alt="icon-mic"
          />
        </div>
        {/* Modal header */}
        <label className="font-spline text-base">
          {isLoginVisible ? "Sign In" : "Sign Up"}
        </label>
        {isLoginVisible ? (
          <Login
            username={username}
            setUsername={setUsername}
            setLoginVisibility={setLoginVisibility}
            setModalVisibilty={showModalVisibilty}
          />
        ) : (
          <SignUp
            setLoginVisibility={setLoginVisibility}
            username={username}
            setUsername={setUsername}
            setModalVisibilty={showModalVisibilty}
          />
        )}
      </div>
    </div>
  ) : null;
};

export default AuthModal;
