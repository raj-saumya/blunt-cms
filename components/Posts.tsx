import { IPosts } from "../shared/interfaces";
import type { FC } from "react";

const Posts: FC<IPosts> = ({ author, title, excerpt }) => {
  return (
    <div className="flex flex-col p-3 rounded-md mb-6 transition duration-500 hover:bg-white hover:shadow-md">
      <label className="font-spline text-sm font-bold mb-1 text-slate-600 cursor-pointer">
        {title}
      </label>
      <label className="font-spline text-sm mb-2 text-slate-400 cursor-pointer">
        {author}
      </label>
      <label className="font-spline text-base text-slate-700 cursor-pointer">
        {excerpt}
      </label>
    </div>
  );
};

export default Posts;
