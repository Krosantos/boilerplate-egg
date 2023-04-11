import { mainIngredientContext } from "@/context/MainIngredientContext";
import React, { useContext } from "react";

const IngredientLabel: React.FC = () => {
  const { ingredient } = useContext(mainIngredientContext);

  return <h4>{ingredient}</h4>;
};

export { IngredientLabel };
