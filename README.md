# react-calculator-latex

A React library for creating a calculator with LaTeX rendering support.

## Installation

You can install the package via npm:

```bash
npm install react-calculator-latex
```


## Usage

### Calculator Component

The `Calculator` component provides a user interface for inputting expressions and displaying the result with LaTeX rendering.

```tsx
import React from 'react';
import { CalculatorContent, useCalculator } from 'react-calculator-latex';

const App = () => {
  const calculator = useCalculator();

  return (
    <div>
      <CalculatorContent calculator={calculator} />
    </div>
  );
};

export default App;

```


## Types and Components Documentation

### CalculatorContent Component

```ts
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
export default function CalculatorContent({ calculator, className, style, inputClassName, inputStyle, }: CalculatorContentProps): import("react/jsx-runtime").JSX.Element;
```


### CalculatorDisplay Component


```ts
import { CalculatorDisplayProps } from "../lib/types";
/**
 * Component for displaying the calculated expression using KaTeX.
 *
 * @param {CalculatorDisplayProps} props - Props for CalculatorDisplay.
 * @param {string} props.expression - The mathematical expression to render.
 */
declare const CalculatorDisplay: ({ expression }: CalculatorDisplayProps) => import("react/jsx-runtime").JSX.Element;
export default CalculatorDisplay;
```


### useCalculator hook

```ts
import { Calculator, CalculatorOptions } from "../lib/types";
/**
 * Custom hook to create and manage a calculator instance.
 *
 * @param {CalculatorOptions} [options] - Configuration options for the calculator.
 * @returns {Calculator} An object with calculator functionality.
 */
export declare const useCalculator: (options?: CalculatorOptions) => Calculator;
```




