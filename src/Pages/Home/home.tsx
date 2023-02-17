import { Block, BlockProps } from "../../components/Block";
import { Header } from "../../components/Header";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import { data } from "./data";
import { useState } from "react";

export default function Home() {
  const [blocks, setBlocks] = useState<BlockProps[]>(data);

  console.log(blocks);
  return (
    <div className="flex flex-col">
      <Header />
      <div className="border flex items-center justify-center scrollbar-hide">
        <div className="my-10 mx-10 sm:mx-0 w-full max-w-6xl grid row-auto items-center grid-cols-3 gap-5">
          {blocks.map((element) => {
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
          })}
        </div>
      </div>
    </div>
  );
}
