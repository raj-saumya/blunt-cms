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
  body: string;
  id: number;
  owner: boolean;
  owner_name: string;
  status: string;
  subject: string;
}
