import { FC } from "react";
import { useRandomCatData } from "../api/useRandomCatData.hook.tsx";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  const { data, isError, isLoading } = useRandomCatData();

  if (isError) {
    return <div>Ooops, something wrong...</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data || {}, null, 2)}</div>;
};
