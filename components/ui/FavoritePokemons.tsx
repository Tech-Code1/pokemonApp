import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoriteCardPokemon } from "../pokemon";

interface IProps {
  pokemons: number[];
}

export const FavoritePokemons: FC<IProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon pokemonId={id} key={id} />
      ))}
    </Grid.Container>
  );
};
