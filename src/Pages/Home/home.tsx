import { Block, BlockProps } from "../../components/Block";
import { Header } from "../../components/Header";
import { faker } from "@faker-js/faker";
import { data } from "./data";
import { useState } from "react";
import Festa1 from "../../assets/festa1.png";
import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { MapTiler } from "../../components/Maptiler";

export default function Home() {
  const testeContext = useContext(AppContext);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex items-center justify-center scrollbar-hide">
        <div className="my-10 mx-10 sm:mx-0 w-full max-w-6xl grid row-auto items-center grid-cols-3 gap-5">
          <div className="col-span-3 flex items-center justify-between">
            <p className="sm:text-3xl font-Inter font-bold ">
              Blocos Recomendados
            </p>
            <div className="flex items-centes justify-center p-2 gap-2 rounded-lg">
              <Button
                size="sm"
                variant={testeContext?.view ? "gradient" : "text"}
                color="purple"
                onClick={() => {
                  testeContext?.setView(!testeContext.view);
                }}
              >
                Lista
              </Button>
              <Button
                variant={testeContext?.view ? "text" : "gradient"}
                onClick={() => {
                  testeContext?.setView(!testeContext.view);
                }}
                color="purple"
                size="sm"
              >
                MAPA
              </Button>
            </div>
          </div>
          {testeContext?.view ? (
            testeContext?.teste?.map((element) => {
              return (
                <Block
                  id={element.id}
                  key={element.id}
                  title={element.title}
                  city={element.city}
                  description={element.description}
                  image={element.image}
                  uf={element.uf}
                />
              );
            })
          ) : (
            <MapTiler />
          )}
        </div>
      </div>
    </div>
  );
}
