import { MainIngredientProvider } from "@/context/MainIngredientContext";
import React from "react";
import { ContextSetter } from "./ContextSetter";
import { IngredientLabel } from "@/components/IngredientLabel";

interface ContextProps {}

const Context: React.FC<ContextProps> = (props) => {
  return (
    <div>
      <div style={{ border: "1px solid #8200ff", marginTop: "24px" }}>
        <MainIngredientProvider>
          <ContextSetter />
          <IngredientLabel />
          <IngredientLabel />
          <IngredientLabel />
        </MainIngredientProvider>
      </div>
      <div style={{ border: "1px solid #8200ff", marginTop: "24px" }}>
        <MainIngredientProvider>
          <ContextSetter />
          <IngredientLabel />
          <IngredientLabel />
          <IngredientLabel />
        </MainIngredientProvider>
      </div>
    </div>
  );
};

export { Context };
