import { Calculator } from "../lib/types";

type CalculatorButtonsProps = {
  calculator: Calculator | null;
};

export default function CalculatorButtons({
  calculator,
}: CalculatorButtonsProps) {
  if (!calculator) return;
  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <button onClick={() => calculator.undo()}>Undo</button>
        <button onClick={() => calculator.redo()}>Redo</button>
        <button
          onClick={() => calculator.appendInput("sin()")}
          className="px-3 py-2 rounded-md inline-flex items-center shrink-0 font-semibold"
        >
          Sin
        </button>
      </div>
    </div>
  );
}
