import type { App } from "../types/App";
import TextDocument from "../components/app/TextDocument";
import Directory from "../components/app/DirectoryComponent";

export function createTextDocument(name : string, text : string) : App{
    return {
        name,
        ico:'/img/text.png',
        program : <TextDocument text={text}/>,
        zIndex : 0,
        process : null,
        left: window.innerWidth / 2 - 300, 
        top: 120,
        size : {
            width : 600,
            height : 440,
    
        }
    };
}

export function createDirectory(name : string, apps : App[]) : App{
    return {
        name,
        ico:'/img/directory.png',
        program : <Directory apps={apps}/>,
        zIndex : 0,
        process : null,
        left: 120,
        top: 120,
        size : {
            width : 384,
            height : 384,
    
        }
    };
}