export interface Result<T> {
  payload: T | undefined;
  isOk: boolean;
}

export interface IUserLoginReq {
  username: string;
  password: string;
}

export interface IUserLoginResp {
  token: string;
}

export interface IUserSignUpResp {
  id: number;
  username: string;
  is_admin: boolean;
  token: string;
}

export interface ICreatePostReq {
  subject: string;
  body: string;
}
