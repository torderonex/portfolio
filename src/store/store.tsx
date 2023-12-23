import { makeAutoObservable } from "mobx";
import { App } from "../types/App";

export default class Store{
    private isStartMenuOpen = false;
    private apps : App[] = [];

    constructor(){
        makeAutoObservable(this);
    }

    setIsStartMenuOpen(bool : boolean){
        this.isStartMenuOpen = bool;
    }

    getStartMenuStatus(){
        return this.isStartMenuOpen;
    }

    openApp(app : App){
        if (this.apps.includes(app))
            return;
        this.apps.push(app);
    }

    getApps(){
        return this.apps;
    }

    closeApp(appName : string){
        this.apps = this.apps.filter(e => e.name !== appName);
    }
}