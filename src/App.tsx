import { FC } from "react";
import { HomePage } from "./pages/home.page.tsx";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <>
      <HomePage />
    </>
  );
};
