import { useGlobalAppState } from "@/context/GlobalAppState";
import Link from "next/link";
import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";

interface EggProps {}

const Egg: React.FC<EggProps> = () => {
  const [text, setText] = useState<string>("INIT");
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (e) => {
      const newVal = e.currentTarget.value;
      setText(newVal);
    },
    []
  );

  const setGlobalText = useGlobalAppState((s) => s.setSharedText);

  const updateGlobalText = useCallback(() => {
    setGlobalText(text);
  }, [setGlobalText, text]);

  return (
    <>
      <div style={{ border: "1px solid #8200ff" }}>
        <h3>PAGE</h3>
        <Link href="/bacon">GO TO BACON</Link>
        <p>{text}</p>
        <textarea value={text} onChange={handleChange} />
        <button onClick={updateGlobalText}>UPLOAD MEEE</button>
      </div>
      <pre>BIG COMPLEX COMPONENT</pre>
    </>
  );
};

export { Egg };
