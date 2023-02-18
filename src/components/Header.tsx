import { Button, Input, Option, Select } from "@material-tailwind/react";
import { MagnifyingGlass } from "phosphor-react";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import "animate.css";

export function Header() {
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
          <strong className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-deep-purple-500 to-pink-600 ">
            melhores blocos
          </strong>
          <br />
          de carnaval de 2023
        </p>

        <div className="w-full sm:w-7/12 grid grid-cols-3  gap-4 rounded-lg bg-white py-10 px-10 drop-shadow-lg">
          <div className="col-span-3 sm:col-span-1 text-[#E45858]">
            <Input
              color="purple"
              icon={<MagnifyingGlass className="" size={25} />}
              label="Pesquisar por nome"
            />
          </div>
          <div className="col-span-3 sm:col-span-1">
            <Select color="purple" label="Selecione uma Cidade">
              <Option>Mato Grosso</Option>
              <Option>São Paulo</Option>
              <Option>Rio de Janeiro</Option>
            </Select>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <Button fullWidth variant="gradient" color="purple">
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
