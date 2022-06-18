import type { AppProps } from "next/app";
import AuthModal from "../components/AuthModal";
import { AuthProvider } from "../context/AuthContext";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <AuthModal />
      <Component {...pageProps} />;
    </AuthProvider>
  );
};

export default MyApp;
