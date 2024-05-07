import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../../api/apiClient";
import { NamedAPIResourceList, Pokemon } from "../interfaces/Pokemon";

export const usePokemonQuery = () => {
  const pokemonQuery = useQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemons,
  });

  return { pokemonQuery };
};

const fetchPokemons = async () => {
  const response = await apiClient.get<NamedAPIResourceList>(
    "https://pokeapi.co/api/v2/pokemon",
    {
      params: {
        limit: 100,
      },
    }
  );
  const pokemonPromises: Promise<Pokemon>[] = [];

  if (response.data) {
    response.data.results.map((resource) => {
      const pokemon = fetchPokemon(resource.name);
      pokemonPromises.push(pokemon);
    });
  }

  return await Promise.all(pokemonPromises);
};

const fetchPokemon = async (name: string) => {
  const response = await apiClient.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  return response.data;
};
