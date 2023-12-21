import { makeAutoObservable } from "mobx";

export default class Store{
    private isStartMenuOpen = false;
    
    constructor(){
        makeAutoObservable(this);
    }

    setIsStartMenuOpen(bool : boolean){
        this.isStartMenuOpen = bool;
    }

    getStartMenuStatus(){
        return this.isStartMenuOpen;
    }
}