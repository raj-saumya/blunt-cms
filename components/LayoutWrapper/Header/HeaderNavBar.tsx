import { useRouter } from "next/router";
import Link from "next/link";
import type { FC } from "react";

const isSamePath = (linkPath: string, currentPath: string) => {
  return linkPath === currentPath;
};

interface IHeaderLink {
  title: string;
  path: string;
}

const HeaderLink: FC<IHeaderLink> = ({ title, path }) => {
  const { asPath } = useRouter();
  const _class = `cursor-pointer font-spline text-sm text-slate-800 underline-offset-4 mr-12 hover:text-sky-700`;

  return (
    <Link href={path}>
      <a>
        <label
          className={`${_class} ${isSamePath(path, asPath) ? "underline" : ""}`}
        >
          {title}
        </label>
      </a>
    </Link>
  );
};

interface IHeaderNavBar {
  navItems: Array<{ title: string; path: string }>;
  isLoggedIn: boolean;
}

const HeaderNavBar: FC<IHeaderNavBar> = ({ navItems, isLoggedIn }) => {
  const showNavsOnAuth = (title: string) => {
    return title === "Home" || (isLoggedIn && title !== "Home");
  };

  return (
    <div className="hidden flex-row items-center sm:flex">
      {navItems.map((d, index) =>
        showNavsOnAuth(d.title) ? <HeaderLink key={index} {...d} /> : null
      )}
    </div>
  );
};

export default HeaderNavBar;
