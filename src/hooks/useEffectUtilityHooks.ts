import { useEffect, useRef } from "react";

export const useEffectNoInitialTrigger = (callback: () => void, deps?: any[]) => {
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    callback && callback();
  }, [callback, ...(deps || [])]);
};
