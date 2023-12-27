import { createTextDocument } from "../utils/createApp";

const webchess = createTextDocument("webches.txt",`
               _        _              
   __ __ _____| |__  __| |_  ___ ______
   \\ V  V / -_) '_ \\/ _| ' \\/ -_|_-<_-<
    \\_/\\_/\\___|_.__/\\__|_||_\\___/__/__/
   
    My first major pet project, during which I developed from scratch a full-fledged
    chess web platform that implements the functionality of creating game rooms,
    playing chess over the network, and a rating system. In this project, I myself
    developed a chess engine from scratch using pure TypeScript that runs on the front end.                                    
    The backend, in turn, was written in a clean architecture style, which allows it to easily scale.
    
    Technology stack:
        Frontend : TypeScript, React, MobX, Axios
        Backend : Golang, Gin, PostgreSQL, Websockets, Rest-api
    GitHub repository: https://github.com/torderonex/webchess 


`)
const teamspace = createTextDocument("teamspace.txt",`
    _                                       
    | |_ ___ __ _ _ __  ____ __  __ _ __ ___ 
    |  _/ -_) _\` | '  \\(_-< '_ \\/ _\` / _/ -_)
    \\__\\___\\__,_|_|_|_/__/ .__/\\__,_\\__\\___|
                        |_|                

    My first major pet project, during which I developed from scratch a full-fledged
    chess web platform that implements the functionality of creating game rooms,
    playing chess over the network, and a rating system. In this project, I myself
    developed a chess engine from scratch using pure TypeScript that runs on the front end.                                    
    The backend, in turn, was written in a clean architecture style, which allows it to easily scale.
    
    Technology stack:
        Frontend : TypeScript, React, MobX, Axios
        Backend : Golang, Gin, PostgreSQL, Websockets, Rest-api
    GitHub repository: https://github.com/torderonex/teamspace

`)
const gochain = createTextDocument("gochain.txt",`
`)
const liveEvents = createTextDocument("liveEvents.txt","")
const other = createTextDocument("other.txt","")

export const myProjs = [webchess, teamspace, gochain,liveEvents,other];