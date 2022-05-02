import { useEffect, useRef } from "react";

export const useCountRenders = (name: string, logger = console.log) => {
  const renders = useRef(1);
  useEffect(() => {
    // Every time the component has been re-rendered,
    // the counter is incremented
    renders.current++;
  });

  logger("%c R E N D E R S: " + name + " = " + renders.current, "color:green");

  return renders.current;
};
