import { useCalculator } from "../hooks/useCalculator";
import CalculatorDisplay from "./calculator-display";

const Test = () => {
  const calculator = useCalculator();
  return (
    <div>
      <input onChange={(e) => calculator.setExpression(e.target.value)} />
      <CalculatorDisplay expression={calculator.expression} />
    </div>
  );
};

export default Test;
