import type { FC } from "react";

export interface IMeta {
  title: string;
  description: string;
}

export interface IModal {
  title: string;
  confirmBtnLabel: string;
  rejectBtnLabel: string;
  modalBody: FC<any>;
}

export interface IPosts {
  author: string;
  title: string;
  excerpt: string;
}
