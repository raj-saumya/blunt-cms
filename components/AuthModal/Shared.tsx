import Image from "next/image";
import type { FC } from "react";

interface IInput {
  imgSrc: string;
  imgAlt: string;
  type: string;
  placeholder?: string;
  value: any;
  setValue: any;
  className?: string;
}

export const Input: FC<IInput> = ({
  imgSrc,
  imgAlt,
  type,
  placeholder = "text",
  value,
  setValue,
  className = "",
}) => {
  return (
    <div
      className={
        "flex items-center justify-between border-slate-400 rounded border px-2 " +
        className
      }
    >
      <Image
        src={imgSrc}
        width={20}
        height={20}
        objectFit="fill"
        alt={imgAlt}
      />
      <input
        className="font-spline text-sm outline-none w-full text-slate-700 px-2 py-1"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const LoadingIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="white"
          strokeWidth="4"
          fill="none"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};
