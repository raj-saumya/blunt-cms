import create from "zustand";
import { loginUser } from "../services/authService";
import { IUserLoginReq } from "../services/interfaces";

interface LoginState {
  $isLoggedIn: boolean;
  $isLoading: boolean;
  loginUser: (userInput: IUserLoginReq) => void;
  logoutUser: () => void;
}

export const useStore = create<LoginState>((set) => ({
  $isLoggedIn: false,
  $isLoading: false,
  loginUser: async (userInput: IUserLoginReq) => {
    set({ $isLoading: true });
    // await loginUser(userInput);
    await new Promise((resolve) => resolve(3));
    set({ $isLoading: false, $isLoggedIn: true });
  },
  logoutUser: () => {
    set({ $isLoggedIn: false });
  },
}));
