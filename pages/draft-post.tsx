import { useState } from "react";
import { IMeta } from "../shared/interfaces";
import { useStore } from "../store/loginStore";
import LayoutWrapper from "../components/LayoutWrapper";
import PostForm from "../components/PostForm";
import type { NextPage } from "next";

const DraftPost: NextPage = () => {
  const isLoggedIn = useStore((state) => state.$isLoggedIn);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const meta: IMeta = {
    title: "Create Post",
    description: "Create a new post to publish",
  };

  return (
    <LayoutWrapper meta={meta}>
      <div className="flex flex-col bg-slate-100 mx-10 p-16 rounded-lg">
        {isLoggedIn ? (
          <>
            <PostForm
              title={title}
              setTitle={setTitle}
              body={body}
              setBody={setBody}
            />
            <div className="flex mt-10">
              <button
                className="font-spline text-sm rounded-md bg-sky-600 text-white px-4 py-2 shadow hover:bg-sky-700 mr-4 disabled:bg-sky-800"
                disabled={title === "" || body === ""}
              >
                Save as draft
              </button>
              <button
                className="font-spline text-sm rounded-md bg-sky-600 text-white px-4 py-2 shadow hover:bg-sky-700 disabled:bg-sky-800"
                disabled={title === "" || body === ""}
              >
                Send request to publish
              </button>
            </div>
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

export default DraftPost;
