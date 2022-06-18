import { crudPost } from "./common";
import { IUserLoginReq, IUserLoginResp, Result } from "./interfaces";

const API_END_POINT = "http://192.168.0.107:8080";
const USER_LOGIN = `${API_END_POINT}/users/login`;

export const loginUser = async (
  userInput: IUserLoginReq
): Promise<Result<IUserLoginResp>> =>
  await crudPost<IUserLoginResp>(USER_LOGIN, JSON.stringify(userInput));
