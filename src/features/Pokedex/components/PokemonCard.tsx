import { Pokemon } from "../interfaces/Pokemon";

const colors: { [key: string]: string } = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

interface PokemonCardProps {
  pokemon: Pokemon;
}
export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const type = pokemon.types[0].type.name;
  const style = {
    backgroundColor: colors[type],
  };

  return (
    <div
      className="bg-[#eee] rounded-xl text-center m-3 p-5 shadow-md  "
      style={style}
    >
      <div className="img-container">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="info">
        <span className="number">#{pokemon.id}</span>
        <h6 className="name">{pokemon.name}</h6>
        <small className="type">
          Type: <span>{type}</span>{" "}
        </small>
      </div>
    </div>
  );
};
