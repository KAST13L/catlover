import { FC } from "react";
import { useRandomCatData } from "../api/useRandomCatData.hook.tsx";
import { CatCard } from "../components/cat-card.component.tsx";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  const { data, isError, isLoading } = useRandomCatData();

  if (isError) {
    return <div>Ooops, something wrong...</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return <div>No cats :(</div>;
  }

  return (
    <div className="flex flex-wrap gap-8 justify-between">
      {data.map((cat) => (
        <CatCard
          key={cat.id}
          name={cat.breeds.map((b) => b.name).join(",") || "Cute cat"}
          image={cat.url}
        />
      ))}
    </div>
  );
};
