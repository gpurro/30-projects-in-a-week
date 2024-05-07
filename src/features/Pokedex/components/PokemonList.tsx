import { usePokemonQuery } from "../hooks/usePokemonQuery";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = () => {
  const { pokemonQuery } = usePokemonQuery();

  return (
    <div className="flex flex-wrap content-between justify-center max-w-full">
      {pokemonQuery.isLoading && <div>Loading...</div>}
      {pokemonQuery.isError && <div>Error</div>}
      {pokemonQuery.data &&
        pokemonQuery.data.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>;
        })}
    </div>
  );
};
