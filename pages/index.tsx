import { useEffect } from "react";
import { IMeta } from "../shared/interfaces";
import { useStore } from "../store/loginStore";
import LayoutWrapper from "../components/LayoutWrapper";
import Posts from "../components/Posts";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const getPosts = useStore((state) => state.getPosts);
  const posts = useStore((state) => state.$posts);
  const meta: IMeta = {
    title: "BLUNT CMS",
    description: "Trying to make CMS",
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <LayoutWrapper meta={meta}>
      <div className="flex flex-col bg-slate-100 mx-10 p-16 rounded-lg">
        {posts.length ? (
          <>
            <label className="font-spline font-bold text-base mb-4">
              {posts.length} Posts found.
            </label>
            {posts.map((_, index) => (
              <Posts key={index} {..._} />
            ))}
          </>
        ) : (
          <label className="font-spline font-bold text-base text-sky-700 mb-4">
            Fetching the posts.
          </label>
        )}
      </div>
    </LayoutWrapper>
  );
};

export default Home;
