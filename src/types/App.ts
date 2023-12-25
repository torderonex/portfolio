import { ReactElement } from "react";

export interface App{
    name : string;
    ico : string;
    program : ReactElement;
    process : string | null;
    zIndex : number;
    left: number;
    top : number;
    size : windowSize;
}

export interface windowSize{
    width : number;
    height : number
}