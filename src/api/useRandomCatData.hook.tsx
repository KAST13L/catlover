import { useQuery } from "react-query";
import { api } from "../core/api.ts";
import { GetRandomCatsDto } from "./dto/get-random-cats.dto.ts";

export const getRandomCats = async () => {
  const { data } = await api.get<GetRandomCatsDto>(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  return data;
};
export const useRandomCatData = () => {
  const { data, isError, isLoading } = useQuery("getRandomCats", getRandomCats);
  return {
    data,
    isError,
    isLoading,
  };
};
