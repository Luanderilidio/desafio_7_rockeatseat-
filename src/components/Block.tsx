import { faker } from "@faker-js/faker";
import { MapPin } from "phosphor-react";

export interface BlockProps {
  id: string;
  title: string;
  description: string;
  city: string;
  uf: string;
  image: string;
}

export function Block(props: BlockProps) {
  return (
    <div className="shadow-xl transition ease-in-out hover:scale-105 hover:shadow-2xl flex flex-col items-center font-roboto rounded-lg col-span-3 sm:col-span-1 ">
      <img
        src={props.image}
        className="object-cover h-[153px] w-full rounded-t-lg shadow-md "
      />

      <div className="p-5 flex flex-col gap-3">
        <p className="text-lg font-bold">{props.title}</p>
        <p className="text-sm font-normal text-gray-700">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <div className="flex items-center justify-start gap-2">
          <MapPin className="text-[#E45858]" size={20} />
          <p className="text-sm font-medium text-gray-800">{`${props.city} - ${props.uf}`}</p>
        </div>
      </div>
    </div>
  );
}
