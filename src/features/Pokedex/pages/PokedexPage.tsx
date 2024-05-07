import { PokemonList } from "../components/PokemonList";

export const PokedexPage = () => {
  const style = {
    background: "linear-gradient(to right, #d4d3dd, #efefbb)",
    fontFamily: "'Lato', sans-serif",
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-[#efefbb]"
      style={style}
    >
      <h3 className="m-12 tracking-widest ">Pokedex</h3>
      <PokemonList />
    </div>
  );
};
