import { type DependencyList, useEffect, useRef } from "react";

export default function useEffectOnUpdate(
  effectFunction: () => void | (() => void),
  deps: DependencyList,
) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      effectFunction();
    }
  }, [effectFunction, deps]);
}
