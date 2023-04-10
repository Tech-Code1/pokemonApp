/* eslint-disable react-hooks/rules-of-hooks */
import { Layout } from "@/components/layouts";
import { FavoritePokemons, NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { Container, Text, Image, Grid, Card } from "@nextui-org/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const favoritesPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default favoritesPage;
