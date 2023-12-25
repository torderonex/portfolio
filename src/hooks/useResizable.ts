import { useState, useEffect, MouseEvent, useRef } from 'react';
import { App, windowSize } from '../types/App';

interface ResizableBoxState {
  resizing: any;
  onMouseDown : (e : MouseEvent) => void;
}

export const useResizableBox = (app : App): ResizableBoxState => {
  const resizing = useRef(false);

  const handleMouseDown = (e: MouseEvent): void => {
    const borderSize = 20
    const bottomRight = [app.left + app.size.width,app.top + app.size.height];
    const isNearBorder = Math.abs(e.clientX - bottomRight[0]) < borderSize && Math.abs(e.clientY - bottomRight[1]) < borderSize; 

    if (isNearBorder) {
      resizing.current = true;
    }
  };

  const handleMouseUp = (): void => {
    resizing.current = false;
  };

  const handleMouseMove : any= (e: MouseEvent): void => {
    if (!resizing.current) return;

    const newWidth =  e.clientX - app.left ;
    const newHeight =  e.clientY - app.top ;
    const maxWidth = window.innerWidth - 10; 
    const maxHeight = window.innerHeight - 10;

    if (newWidth > 200 && newWidth < maxWidth) {
      app.size.width = newWidth;
    }

    if (newHeight > 100 && newHeight < maxHeight) {
      app.size.height = newHeight;
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [resizing]);

  return {
    resizing,
    onMouseDown: handleMouseDown,
  };
};

