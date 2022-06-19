import type { FC } from "react";

interface IOptions {
  title: string;
  setTitle: any;
  body: string;
  setBody: any;
}

const PostForm: FC<IOptions> = ({ title, setTitle, body, setBody }) => {
  return (
    <div className="flex flex-col">
      <label className="font-spline text-sm text-slate-700 mb-2">
        Title<sup>*</sup>
      </label>
      <input
        className="font-spline text-base outline-none w-full text-slate-700 px-2 py-1 rounded mb-6"
        placeholder="Enter post title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="font-spline text-sm text-slate-700 mb-2">
        Body<sup>*</sup>
      </label>
      <textarea
        className="font-spline text-base outline-none w-full text-slate-700 px-2 py-1 rounded"
        placeholder="Enter post body"
        rows={10}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
    </div>
  );
};

export default PostForm;
