import { FC, ReactNode } from "react";

import Head from "next/head";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || " PokemonApp"}</title>
        <meta name="autor" content="David Montoya Ramírez" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokémon, pokedex`} />
      </Head>

      {/* Navbar */}

      <main>{children}</main>
    </>
  );
};
