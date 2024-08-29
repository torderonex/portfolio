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

    A huge project that I led with my team during a hackathon from my university, in a week we created
    an entire working agile system that includes the classic functionality of Kanban boards, real-time chats and
    documentations, we also added a gamification feature for project development.

    Technology stack:
        Frontend : TypeScript, Vue, PrimeVue, Vite, Axios
        Backend : TypeScript, Express.JS, Sequelize, PostgreSQL, Socket.io, Rest-api
    GitHub repository: https://github.com/torderonex/teamspace

`)
const gochain = createTextDocument("gochain.txt",`
                      _         _      
         __ _ ___  __| |_  __ _(_)_ _  
        / _\` / _ \\/ _| ' \\/ _\` | | ' \\ 
        \\__, \\___/\\__|_||_\\__,_|_|_||_|
        |___/                          
    
    A project in which I wrote a cryptocurrency (node and client) from scratch using the standard Golang library.
    The blockchain and network libraries were also implemented independently

    Technology stack: Golang
    GitHub repository: https://github.com/torderonex/gochain
 
`)
const onlineStore = createTextDocument("online-store.txt",`
    
   ___      _              __ 
  | _ ) ___| |_  ___  ___ / _|
  | _ \\/ -_) ' \\/ _ \\/ _ \\  _|
  |___/\\___|_||_\\___/\\___/_|  
                              
  Online electronics store. The application implements the functionality of cards, catalog, filtering,
  reviews and ratings. The site also has a mode for the blind and visually impaired, in which all text is
  read by a robot.

  Technology stack:
    Frontend : JavaScript, React.
    Backend : NodeJS, Express.JS, Sequelize, PostgreSQL, Rest-api
  GitHub repository: https://github.com/torderonex/online-store
`)

const geekHubCompiler = createTextDocument("web\ncompiler.txt",`
  
             _                       _ _         
 __ __ _____| |__  __ ___ _ __  _ __(_) |___ _ _ 
 \\ V  V / -_) '_ \\/ _/ _ \\ '  \\| '_ \\ | / -_) '_|
  \\_/\\_/\\___|_.__/\\__\\___/_|_|_| .__/_|_\\___|_|  
                               |_|               
  
  Fullstack project web IDE. It implements such features as: isolated code execution in different languages
  in the built-in web code editor, AI chat assistant for the programmer, AI smart code review,
  Tasks like leetcode.
  Also, the user can create projects with several files and invite other developers to these projects.
  The project was carried out in a team of 3 programmers, the backend was entirely on me.
  
  Technology stack:
    Frontend : TypeScript, React, Redux Toolkit.
    Backend : Golang, Gin, PostgreSQL, Rest-api, Docker, docker-compose, DnD
    
  GitHub repository: https://github.com/torderonex/geekhub
`)

const other = createTextDocument("other.txt",`
    In addition to large web applications, I also developed various CLI applications and telegram bots.

    Dotaguidebot:
        Using parsing, this bot sends a build to any Dota hero depending on the assigned role.
        Stack: Go, tgbotapi
        Github: https://github.com/torderonex/dotaguidebot

    CLIchat:
        Very simple command line interface real-time chat on websockets.
        Stack: Go
        Github: https://github.com/torderonex/CLIchat

    Cryptorate:
        A simple bot that sends an alert with the rate of selected cryptocurrencies.
        Based on a self-written scheduler
        Stack: Go, tgbotapi
        Github: https://github.com/torderonex/cryptorate
     
    Crud generator
        A self-written code generator for generating CRUD queries to postgres for Go.
        Stack: Go
        Github: https://github.com/torderonex/crud_generator
        
        `)

export const myProjs = [webchess, teamspace, gochain,onlineStore, geekHubCompiler, other];