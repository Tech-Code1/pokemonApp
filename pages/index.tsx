import { GetStaticProps, NextPage } from "next";
import { Card, Grid, Row, Text } from "@nextui-org/react";

import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { IPokemonListResponse, ISmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemon";

interface IProps {
  pokemons: ISmallPokemon[];
}

const HomePage: NextPage<IProps> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de Pokémon">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
            <PokemonCard pokemons={pokemon} key={pokemon.id} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<IPokemonListResponse>(
    "/pokemon?limit=151"
  );

  const pokemons: ISmallPokemon[] = data.results.map((poke, i) => {
    const index = i + 1;
    return {
      ...poke,
      id: index,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
