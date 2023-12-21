import { useEffect } from "react";
import { useLatest } from "./useLatest";
export function useOutsideClick(elementRef : React.MutableRefObject<HTMLElement | null>, handler : () => void, attached = true) {
    const latestHandler = useLatest(handler);
  
    useEffect(() => {
      if (!attached) return;
  
      const handleClick = (e : MouseEvent) => {
        if (!elementRef.current) return;
  
        if (!elementRef.current.contains(e.target as HTMLElement)) {
          latestHandler.current();
        }
      };
  
      document.addEventListener("click", handleClick);
  
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [elementRef, latestHandler, attached]);
  }