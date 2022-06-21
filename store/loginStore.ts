import create from "zustand";
import { getPosts, loginUser, signUpUser } from "../services/authService";
import { IUserLoginReq } from "../services/interfaces";
import { IPosts } from "../shared/interfaces";

interface LoginState {
  $isLoggedIn: boolean;
  $isLoading: boolean;
  $token: string;
  $posts: IPosts[];
  loginUser: (userInput: IUserLoginReq) => void;
  logoutUser: () => void;
  signUpUser: (userInput: IUserLoginReq) => void;
  getPosts: () => void;
}

export const useStore = create<LoginState>((set) => ({
  $isLoggedIn: false,
  $isLoading: false,
  $token: "",
  $posts: [],
  loginUser: async (userInput: IUserLoginReq) => {
    set({ $isLoading: true });
    const resp = await loginUser(userInput);
    set({
      $isLoading: false,
      $isLoggedIn: resp.isOk ? true : false,
      $token: resp.isOk ? resp.payload?.token : "",
    });
  },
  logoutUser: () => {
    set({ $isLoggedIn: false, $token: "" });
  },
  signUpUser: async (userInput: IUserLoginReq) => {
    set({ $isLoading: true });
    const resp = await signUpUser(userInput);
    set({
      $isLoading: false,
      $isLoggedIn: resp.isOk ? true : false,
      $token: resp.isOk ? resp.payload?.token : "",
    });
  },
  getPosts: async () => {
    set({ $isLoading: true });
    const resp = await getPosts();
    set({
      $isLoading: false,
      $posts: resp.isOk ? resp.payload : [],
    });
  },
}));
