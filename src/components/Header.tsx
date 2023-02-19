import { useContext, useState } from "react";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import { BlockProps } from "./Block";
import { data } from "../Pages/Home/data";

import { MagnifyingGlass, X } from "phosphor-react";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import "animate.css";
import { AppContext } from "../context/context";

export function Header(): JSX.Element {
  const testeContext = useContext(AppContext);
  const [name, setName] = useState("");
  const [state, setState] = useState<string>();
  const [blocks, setBlocks] = useState<BlockProps[]>(data);
  const [clear, setClear] = useState(true);
  const [alert, setAlert] = useState(false);

  const handleClearClick = () => {
    setClear(false);
  };

  const handleCloseClick = () => {
    setName("");
    setClear(true);
    setAlert(false);
    testeContext?.setTeste(data);
  };

  const handleSelect = (value: any) => {
    setState(value);
  };

  const blocksFilter = () => {
    let newBlocks = blocks.filter(
      (element) => element.title === name && element.city === state
    );
    if (newBlocks.length === 0) {
      setAlert(true);
    } else {
      testeContext?.setTeste(newBlocks);
      setAlert(false);
    }
  };

  const focusDesableInput = () => {
    if (name.length === 0) {
      setAlert(false);
      setClear(true);
      testeContext?.setTeste(data);
    }
  };

  return (
    <div className="relative w-full py-24 bg-[#F8F8FF] z-0 shadow-lg rounded-b-xl">
      <img
        className="absolute z-10 top-0 w-60 sm:w-auto animate__animated animate__bounceInLeft animate__faster	"
        src={img1}
      />
      <div className="z-0 h-full flex flex-col items-center justify-center gap-8 px-10">
        <p className="text-[#E45858] uppercase tracking-wide font-Inter font-normal	">
          find your block
        </p>
        <p className="text-4xl sm:text-5xl text-center font-Inter font-bold ">
          Encontre os{" "}
          <strong className="font-bold text-transparent text-4xl sm:text-5xl bg-clip-text bg-gradient-to-r from-deep-purple-500 to-pink-600 ">
            melhores blocos
          </strong>
          <br />
          de carnaval de 2023
        </p>

        <div className="w-full sm:w-7/12 grid grid-cols-3  gap-4 rounded-lg bg-white py-10 px-10 drop-shadow-lg">
          <div className="col-span-3 sm:col-span-1 text-[#E45858]">
            <Input
              error={alert}
              onBlur={focusDesableInput}
              value={name}
              onClick={handleClearClick}
              onChange={(event) => {
                setName(event.target.value);
                if (event.target.value.length === 0) {
                  testeContext?.setTeste(data);
                  console.log(event.target.value.length);
                }
              }}
              color="purple"
              icon={
                clear ? (
                  <MagnifyingGlass className="" size={25} />
                ) : (
                  <X
                    onClick={handleCloseClick}
                    // className="text-red-500"
                    size={25}
                  />
                )
              }
              label="Pesquisar por nome"
            />
          </div>
          <div className="col-span-3 sm:col-span-1">
            <Select
              value={state}
              onChange={handleSelect}
              color="purple"
              label="Selecione uma Cidade"
            >
              <Option value="Mato Grosso">Mato Grosso</Option>
              <Option value="São Paulo">São Paulo</Option>
              <Option value="Rio de Janeiro">Rio de Janeiro</Option>
            </Select>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <Button
              onClick={blocksFilter}
              fullWidth
              variant="gradient"
              color="purple"
            >
              Pesquisar
            </Button>
          </div>
        </div>
      </div>
      <img
        className="absolute z-20  bottom-0 right-0 w-60 sm:w-auto animate__animated animate__bounceInRight animate__faster"
        src={img2}
      />
    </div>
  );
}
