import { createContext, useState } from "react";
import { BlockProps } from "../components/Block";
import { data } from "../Pages/Home/data";

type ContextProviderProps = {
  children: React.ReactNode;
};

interface BlockContextType {
  teste: BlockProps[] | null;
  setTeste: React.Dispatch<React.SetStateAction<BlockProps[] | null>>;
  view: boolean;
  setView: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<BlockContextType | null>(null);

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [teste, setTeste] = useState<BlockProps[] | null>(data);
  const [view, setView] = useState(true);

  return (
    <AppContext.Provider value={{ teste, setTeste, view, setView }}>
      {children}
    </AppContext.Provider>
  );
};
