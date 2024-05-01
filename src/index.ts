// src/index.ts

// Exporting the specific types
export type { Calculator, CalculatorOptions } from './lib/types';

// Exporting the useCalculator hook
export { useCalculator } from './hooks/useCalculator';

// Exporting the CalculatorContent component
export { default as CalculatorContent } from './components/calculator-content';

export { default as CulculatorDisplay } from './components/calculator-display';