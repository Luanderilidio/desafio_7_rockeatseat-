import { createContext, useState } from "react";
import { BlockProps } from "../components/Block";
import { data } from "../Pages/Home/data";

type ContextProviderProps = {
  children: React.ReactNode;
};

interface BlockContextType {
  teste: BlockProps[] | null;
  setTeste: React.Dispatch<React.SetStateAction<BlockProps[] | null>>;
}

export const AppContext = createContext<BlockContextType | null>(null);

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [teste, setTeste] = useState<BlockProps[] | null>(data);

  return (
    <AppContext.Provider value={{ teste, setTeste }}>
      {children}
    </AppContext.Provider>
  );
};
