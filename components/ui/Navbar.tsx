import { useTheme, Text, Spacer } from "@nextui-org/react";
import React from "react";
import Image from "next/image";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Icono de la app"
        width={70}
        height={70}
        priority
      />

      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okémon
      </Text>

      <Spacer css={{ flex: 1 }} />

      <Text color="white">Favoritos</Text>
    </div>
  );
};
