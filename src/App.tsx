import { useState } from "react";
import CalculatorContent from "./components/calculator-content";
import { useCalculator } from "./hooks/useCalculator";
import CalculatorButtons from "./test/test-components";
import CalculatorDisplay from "./components/calculator-display";
import Test from "./components/test";

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

  console.log(content);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="min-w-[20rem] flex flex-col items-center justify-center p-2 border border-black">
        <CalculatorContent calculator={calculator} />
        <CalculatorDisplay expression={calculator.expression} />
        <CalculatorButtons calculator={calculator} />
      </div>
    </main>
  );
}

export default App;
