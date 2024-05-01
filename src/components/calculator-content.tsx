import React from "react";
import { CalculatorContentProps } from "../lib/types";

/**
 * A React component that renders the calculator input and integrates core functionality.
 *
 * @param {CalculatorContentProps} props - The props for the CalculatorContent component.
 * @param {Calculator} props.calculator - The calculator instance to use.
 * @param {string} [props.className=""] - Optional CSS class for the wrapper div.
 * @param {React.CSSProperties} [props.style={}] - Optional inline styles for the wrapper div.
 * @param {string} [props.inputClassName=""] - Optional CSS class for the input element.
 * @param {React.CSSProperties} [props.inputStyle={}] - Optional inline styles for the input element.
 */

export default function CalculatorContent({
  calculator,
  className = "",
  style = {},
  inputClassName = "",
  inputStyle = {},
}: CalculatorContentProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value;
    calculator.setExpression(newInput);
  };

  return (
    <div className={className} style={style}>
      <input
        ref={calculator.inputRef}
        type="text"
        value={calculator.expression}
        onChange={handleInputChange}
        className={`${inputClassName}`}
        style={inputStyle}
      />
    </div>
  );
}
