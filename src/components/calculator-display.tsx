
import { BlockMath } from "react-katex";
import { CalculatorDisplayProps } from "../lib/types";

/**
 * Component for displaying the calculated expression using KaTeX.
 *
 * @param {CalculatorDisplayProps} props - Props for CalculatorDisplay.
 * @param {string} props.expression - The mathematical expression to render.
 */

const CalculatorDisplay = ({ expression }: CalculatorDisplayProps) => {
  return <BlockMath  math={expression} />;
};

export default CalculatorDisplay;
