import { useState } from "react";
import { IPosts } from "../shared/interfaces";
import type { FC } from "react";
import { requestPublish } from "../services/authService";

const Posts: FC<IPosts> = ({ subject, body, owner_name, id, status }) => {
  const [isVisible, setVisibility] = useState<boolean>(false);
  const handleOnClick = () => {
    requestPublish(id).then(() => {});
  };

  return (
    <div
      className="flex flex-col relative p-3 rounded-md mb-6 transition duration-500 hover:bg-white hover:shadow-md"
      onMouseOver={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
    >
      <label className="font-spline text-sm font-bold mb-1 text-slate-600 cursor-pointer">
        {subject}
      </label>
      <label className="font-spline text-sm mb-2 text-slate-400 cursor-pointer">
        {owner_name}
      </label>
      <label className="font-spline text-base text-slate-700 cursor-pointer">
        {body}
      </label>
      {status === "Published" ? null : (
        <button
          className={`absolute bottom-4 right-4 font-spline text-xs bg-red-600 rounded px-4 py-2 w-fit text-white transition duration-300 hover:bg-red-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleOnClick}
        >
          Request to Publish
        </button>
      )}
    </div>
  );
};

export default Posts;
