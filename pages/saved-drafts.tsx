import { useState, useEffect } from "react";
import { IMeta, IPosts } from "../shared/interfaces";
import LayoutWrapper from "../components/LayoutWrapper";
import Posts from "../components/Posts";
import type { NextPage } from "next";
import { getDraftPosts } from "../services/authService";

const SavedDrafts: NextPage = () => {
  const meta: IMeta = {
    title: "Saved drafts",
    description: "saved draft content",
  };
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getDraftPosts()
      .then((resp) => setPosts(resp.payload ? resp.payload : []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <LayoutWrapper meta={meta}>
      <div className="flex flex-col bg-slate-100 mx-10 p-16 rounded-lg">
        {!isLoading ? (
          posts.length ? (
            <>
              <label className="font-spline font-bold text-base mb-4">
                {posts.length} Posts found.
              </label>
              {posts.map((_, index) => (
                <Posts key={index} {..._} />
              ))}
            </>
          ) : (
            <label className="font-spline font-bold text-base text-red-700 mb-4">
              {
                "You don't have any draft. GO to Create Post section to create new post"
              }
              .
            </label>
          )
        ) : (
          <label className="font-spline font-bold text-base text-sky-700 mb-4">
            Loading.
          </label>
        )}
      </div>
    </LayoutWrapper>
  );
};

export default SavedDrafts;
