import React, { useMemo, useState } from "react";

type MainIngredientContext = {
  setIngredient: (ingredient: string) => void;
  ingredient: string;
};

const DEFAULT_VALUE: MainIngredientContext = {
  setIngredient: () => {},
  ingredient: "",
};

const mainIngredientContext =
  React.createContext<MainIngredientContext>(DEFAULT_VALUE);

interface MainIngredientProvider {
  children: React.ReactNode;
}

const MainIngredientProvider: React.FC<MainIngredientProvider> = ({
  children,
}) => {
  const [ingredient, setIngredient] = useState<string>("");
  const value = useMemo<MainIngredientContext>(
    () => ({
      ingredient,
      setIngredient,
    }),
    [ingredient]
  );

  return (
    <mainIngredientContext.Provider value={value}>
      {children}
    </mainIngredientContext.Provider>
  );
};

export { MainIngredientProvider, mainIngredientContext };
