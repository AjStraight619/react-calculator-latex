export type CalculatorOptions = {
  initialExpression?: string;
  initialResult?: string;
  onUpdate?: (props: { calculator: Calculator }) => void;
  onCalculate?: (result: string) => void;
  onError?: (error: string) => void;
  evaluateExpression?: (expression: string) => string;
  attributes?: {
    className?: string;
    style?: React.CSSProperties;
  };
  autoCursorPosition?: boolean;
  manageCursorPosition?: (
    inputRef: React.RefObject<HTMLInputElement>,
    expression: string
  ) => void;
};

export type Calculator = {
  expression: string;
  result: string;
  appendInput: (input: string) => Calculator;
  clear: () => Calculator;
  calculate: () => Calculator;
  setExpression: (expression: string) => Calculator;
  setResult: (result: string) => Calculator;
  undo: () => void;
  redo: () => void;
  autoCursorPosition?: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
};


export type CalculatorDisplayProps = {
  expression: string
}


export type CalculatorContentProps = {
  calculator: Calculator;
  className?: string;
  style?: React.CSSProperties;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
};