import { useEffect, useState } from "react";

export function useDragAndDrop(draggableRef: React.RefObject<HTMLElement>, targetRef: React.RefObject<HTMLElement>, handler? : () => void) {
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const draggableElement = draggableRef.current;
        const targetElement = targetRef.current;
    
        if (!draggableElement || !targetElement) {
          return;
        }
    
        const handleMouseDown = (event : MouseEvent) => {
          setIsDragging(true);
    
          const offsetX =
            event.clientX - targetElement.getBoundingClientRect().left;
          const offsetY = event.clientY - targetElement.getBoundingClientRect().top;
    
          const handleMouseMove = (event : MouseEvent) => {
            if (isDragging) {
              const x = event.clientX - offsetX;
              const y = event.clientY - offsetY;
              targetElement.style.left = `${x}px`;
              targetElement.style.top = `${y}px`;
              handler?.();
            }
          };
    
          const handleMouseUp = () => {
            setIsDragging(false);
    
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
          };
    
          document.addEventListener("mousemove", handleMouseMove);
          document.addEventListener("mouseup", handleMouseUp);
        };
    
        draggableElement.addEventListener("mousedown", handleMouseDown);
    
        return () => {
          draggableElement.removeEventListener("mousedown", handleMouseDown);
        };
      }, [draggableRef.current, targetRef.current]);
}
