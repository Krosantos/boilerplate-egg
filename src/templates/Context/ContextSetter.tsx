import { mainIngredientContext } from "@/context/MainIngredientContext";
import React, {
  ChangeEventHandler,
  useCallback,
  useContext,
  useState,
} from "react";

const ContextSetter: React.FC = () => {
  const { setIngredient } = useContext(mainIngredientContext);
  const [text, setText] = useState<string>("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const newVal = e.currentTarget.value;
      setText(newVal);
    },
    []
  );
  const saveValue = useCallback(() => {
    setIngredient(text);
  }, [setIngredient, text]);

  return (
    <div>
      <input value={text} onChange={handleChange} />
      <button onClick={saveValue}>UPLOAD</button>
    </div>
  );
};

export { ContextSetter };
