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
