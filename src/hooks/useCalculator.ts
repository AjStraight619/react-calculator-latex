import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { Calculator, CalculatorOptions } from "../lib/types";

/**
 * Custom hook to create and manage a calculator instance.
 *
 * @param {CalculatorOptions} [options] - Configuration options for the calculator.
 * @returns {Calculator} An object with calculator functionality.
 */

export const useCalculator = (options?: CalculatorOptions): Calculator => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [expression, setExpression] = useState<string>(
    options?.initialExpression || ""
  );
  const [result, setResult] = useState<string>(options?.initialResult || "");
  const [history, setHistory] = useState<
    Array<{ expression: string; result: string }>
  >([{ expression, result }]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState<number>(0);

  const updateHistory = useCallback(
    (newExpression: string, newResult: string) => {
      const newHistory = history.slice(0, currentHistoryIndex + 1);
      newHistory.push({ expression: newExpression, result: newResult });
      setHistory(newHistory);
      setCurrentHistoryIndex(newHistory.length - 1);
    },
    [currentHistoryIndex, history]
  );

  // const setCursorPosition = (
  //   inputElementRef: React.RefObject<HTMLInputElement>,
  //   position: number
  // ) => {
  //   if (inputElementRef.current && position !== -1) {
  //     inputElementRef.current.setSelectionRange(position, position);
  //   }
  // };

  const calculator: Calculator = useMemo(
    () => ({
      get expression() {
        return expression;
      },
      get result() {
        return result;
      },
      inputRef,
      appendInput: (input: string) => {
        const newExpression = expression + input;
        setExpression(newExpression);
        updateHistory(newExpression, result);

        setTimeout(() => {
          if (options?.autoCursorPosition) {
            if (input.endsWith("()") && calculator.inputRef.current) {
              const newPosition = newExpression.length - 1;
              calculator.inputRef.current.setSelectionRange(
                newPosition,
                newPosition
              );
              calculator.inputRef.current.focus();
            } else if (calculator.inputRef.current) {
              const newPosition = newExpression.length;
              calculator.inputRef.current.setSelectionRange(
                newPosition,
                newPosition
              );
              calculator.inputRef.current.focus();
            }
          } else if (options?.manageCursorPosition) {
            options.manageCursorPosition(calculator.inputRef, newExpression);
          }
        }, 0);

        return calculator;
      },
      clear: () => {
        setExpression("");
        setResult("");
        updateHistory("", "");
        return calculator;
      },
      calculate: () => {
        try {
          let evalResult;
          if (options?.evaluateExpression) {
            evalResult = options.evaluateExpression(expression);
          } else {
            evalResult = eval(expression);
          }
          const newResult = String(evalResult);
          setResult(newResult);
          updateHistory(expression, newResult);
          options?.onCalculate?.(newResult);
        } catch (error: unknown) {
          // console.error("Calculation error:", error);
          // setResult("Error");
          // options?.onError?.(error.toString());
        }
        return calculator;
      },
      setExpression: (newExpression: string) => {
        setExpression(newExpression);
        updateHistory(newExpression, result);
        return calculator;
      },
      setResult: (newResult: string) => {
        setResult(newResult);
        updateHistory(expression, newResult);
        return calculator;
      },
      undo: () => {
        console.log("Attempting undo:", currentHistoryIndex);
        if (currentHistoryIndex > 0) {
          const prevState = history[currentHistoryIndex - 1];
          console.log("Undo to:", prevState);
          setExpression(prevState.expression);
          setResult(prevState.result);
          setCurrentHistoryIndex(currentHistoryIndex - 1);
        }
      },
      redo: () => {
        console.log("Attempting redo:", currentHistoryIndex);
        if (currentHistoryIndex < history.length - 1) {
          const nextState = history[currentHistoryIndex + 1];
          console.log("Redo to:", nextState);
          setExpression(nextState.expression);
          setResult(nextState.result);
          setCurrentHistoryIndex(currentHistoryIndex + 1);
        }
      },
      autoCursorPosition: options?.autoCursorPosition ?? false,
    }),
    [expression, result, history, currentHistoryIndex, options, updateHistory]
  );

  useEffect(() => {
    options?.onUpdate?.({ calculator });
  }, [calculator.expression, options]);

  return calculator;
};
