import { useState } from "react";
import CalculatorContent from "./components/calculator-content";
import { useCalculator } from "./hooks/useCalculator";
import CalculatorButtons from "./test/test-components";

function App() {
  const [content, setContent] = useState("");
  const calculator = useCalculator({
    attributes: {
      className:
        "w-full border border-black rounded-md outline-none ring-0 px-2 py-3",
    },
    onUpdate: ({ calculator }) => {
      setContent(calculator.expression);
    },
  });

  console.log(content)

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="min-w-[20rem] flex flex-col items-center justify-center p-2 border border-black">
        <CalculatorContent calculator={calculator} />
        <CalculatorButtons calculator={calculator} />
      </div>
    </main>
  );
}

export default App;
