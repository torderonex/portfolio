import { useEffect } from "react";

export function useShadow(btnRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!btnRef || !btnRef.current) return;

    const btn = btnRef.current;

    const handleMouseDown = () => {
      btn.style.borderTop = '2px solid black';
      btn.style.borderLeft = '2px solid black';
      btn.style.borderBottom = '2px solid white';
      btn.style.borderRight = '2px solid white';
    };

    const handleMouseUp = () => {
      btn.style.borderTop = '2px solid white';
      btn.style.borderLeft = '2px solid white';
      btn.style.borderRight = '2px solid black';
      btn.style.borderBottom = '2px solid black';
    };

    btn.addEventListener('mousedown', handleMouseDown);
    btn.addEventListener('mouseup', handleMouseUp);

    return () => {
      btn.removeEventListener('mousedown', handleMouseDown);
      btn.removeEventListener('mouseup', handleMouseUp);
    };
  }, [btnRef.current]);
}
