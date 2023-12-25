import { makeAutoObservable } from "mobx";
import { App } from "../types/App";
import {v4} from "uuid";

export default class Store{
    private isStartMenuOpen = false;
    private apps : App[] = [];

    constructor(){
        makeAutoObservable(this);
    }

    getMaxZIndex() : number{
        return Math.max(...this.apps.map(e => e.zIndex)) ;
    }

    setIsStartMenuOpen(bool : boolean){
        this.isStartMenuOpen = bool;
    }

    getStartMenuStatus(){
        return this.isStartMenuOpen;
    }

    openApp(app : App){
        app.process = v4();
        let zIndex = 0;
        if(this.apps.length){
            zIndex = this.getMaxZIndex() + 1;
        }
        app.zIndex = zIndex;
        this.apps.push(app);
    }

    getApps(){
        return this.apps;
    }

    closeApp(processId : string){
        this.apps = this.apps.filter(e => e.process !== processId);
    }
}