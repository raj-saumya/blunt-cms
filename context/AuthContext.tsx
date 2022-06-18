import { createContext } from "react";
import useAuthModal from "../hooks/useAuthModal";
import type { Context, FC } from "react";

export interface IAuthContext {
  visible: boolean;
  setModalVisibilty: (visible: boolean) => void;
}

export const AuthContext: Context<IAuthContext> = createContext<IAuthContext>({
  visible: true,
  setModalVisibilty: (visible: boolean) => {},
});

export const AuthProvider: FC<any> = ({ children }) => {
  const { visible, setModalVisibilty } = useAuthModal();
  return (
    <AuthContext.Provider value={{ visible, setModalVisibilty }}>
      {children}
    </AuthContext.Provider>
  );
};
