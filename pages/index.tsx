import { Layout } from "@/components/layouts";
import { Button } from "@nextui-org/react";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <Layout title="PokemonApp">
        <Button color={"gradient"}>Hola mundo</Button>
      </Layout>
    </>
  );
};

export default HomePage;
