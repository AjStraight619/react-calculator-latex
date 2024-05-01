import { useRef, useEffect } from "react";

// Define the type for the props parameter as a generic to allow any shape of props.
function useWhyDidYouRender<T extends Record<string, any>>(
  name: string,
  props: T
): void {
  const previousProps = useRef<T>();

  useEffect(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      const changesObj: Record<string, { from: any; to: any }> = {};
      allKeys.forEach((key) => {
        if (
          previousProps.current &&
          previousProps.current[key] !== props[key]
        ) {
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key],
          };
        }
      });

      if (Object.keys(changesObj).length) {
        console.log("[why-did-you-render]", name, changesObj);
      }
    }

    previousProps.current = props;
  });
}

export default useWhyDidYouRender;
