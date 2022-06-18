import { IMeta, IPosts } from "../shared/interfaces";
import { useStore } from "../store/loginStore";
import LayoutWrapper from "../components/LayoutWrapper";
import Posts from "../components/Posts";
import type { NextPage } from "next";

const DUMMMY: IPosts = {
  author: "John Doe",
  title: "Lorem ipsum dolor sit amet, consectetur",
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
};

const Home: NextPage = () => {
  const isLoggedIn = useStore((state) => state.$isLoggedIn);

  const meta: IMeta = {
    title: "BLUNT CMS",
    description: "Trying to make CMS",
  };

  const _list: number[] = Array(10).fill(0);

  return (
    <LayoutWrapper meta={meta}>
      <div className="flex flex-col bg-slate-100 mx-10 p-16 rounded-lg">
        {isLoggedIn ? (
          <>
            <label className="font-spline font-bold text-base mb-4">
              {_list.length} Posts found.
            </label>
            {_list.map((_, index) => (
              <Posts key={index} {...DUMMMY} />
            ))}
          </>
        ) : (
          <label className="font-spline font-bold text-base text-red-700 mb-4">
            Please login to see the posts.
          </label>
        )}
      </div>
    </LayoutWrapper>
  );
};

export default Home;
