import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useStore } from "../../../store/loginStore";
import HeaderNavBar from "./HeaderNavBar";
import HeaderNavBarMob from "./HeaderNavBarMob";
import type { FC } from "react";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Drafts", path: "/saved-drafts" },
  { title: "Create Post", path: "/draft-post" },
];

const Header: FC = () => {
  const { push } = useRouter();
  const isLoggedIn = useStore((state) => state.$isLoggedIn);
  const logoutUser = useStore((state) => state.logoutUser);
  const { setModalVisibilty } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoggedIn) {
      push("/");
    }
  }, [isLoggedIn]);

  const handleAuthAction = () => {
    isLoggedIn ? logoutUser() : setModalVisibilty(true);
  };
  return (
    <div className="flex flex-row py-10 sticky top-0 z-20 px-6 bg-white sm:flex-col">
      <div className="flex w-full justify-between sm:mb-4">
        <Link href="/" passHref>
          <label className="font-spline cursor-pointer font-bold text-xl text-[#354136]">
            Blunt CMS
          </label>
        </Link>
        <div className="hidden sm:flex" onClick={handleAuthAction}>
          <label className="cursor-pointer font-spline text-sm text-slate-800 px-4">
            {isLoggedIn ? "Logout" : "Sign In"}
          </label>
        </div>
      </div>
      <HeaderNavBar navItems={navItems} isLoggedIn={isLoggedIn} />
      <HeaderNavBarMob navItems={navItems} />
    </div>
  );
};

export default Header;
