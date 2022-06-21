import { crudGet, crudPost } from "./common";
import {
  ICreatePostReq,
  IUserLoginReq,
  IUserLoginResp,
  IUserSignUpResp,
  Result,
} from "./interfaces";
import { IPosts } from "../shared/interfaces";

const USER_SIGN_IN = `/users/login`;
const USER_SIGN_UP = `/users/signup`;
const GET_POSTS = "/posts/get_posts";
const CREATE_POST = "/posts/create";
const GET_DRAFTS = "/posts/get_drafts";
const REQ_PUBSLISH = "/posts/request_to_publish/";

export const loginUser = async (
  userInput: IUserLoginReq
): Promise<Result<IUserLoginResp>> =>
  await crudPost<IUserLoginResp>(USER_SIGN_IN, JSON.stringify(userInput));

export const signUpUser = async (
  userInput: IUserLoginReq
): Promise<Result<IUserSignUpResp>> =>
  await crudPost<IUserSignUpResp>(USER_SIGN_UP, JSON.stringify(userInput));

export const getPosts = async (): Promise<Result<IPosts[]>> =>
  await crudGet<IPosts[]>(GET_POSTS);

export const createPost = (payload: ICreatePostReq): Promise<Result<any>> =>
  crudPost<any>(CREATE_POST, JSON.stringify(payload));

export const getDraftPosts = (): Promise<Result<IPosts[]>> =>
  crudGet<IPosts[]>(GET_DRAFTS);

export const requestPublish = (id: number): Promise<Result<IPosts[]>> =>
  crudPost<any>(`${REQ_PUBSLISH}${id}`);
