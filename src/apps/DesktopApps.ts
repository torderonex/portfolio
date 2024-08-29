import type { App } from "../types/App";
import { createDirectory, createTextDocument } from "../utils/createApp";
import { myProjs } from "./MyProjectsDirApps";


const about : App = createTextDocument("About me.txt", `
    Hello my name is
       _____           _                     __  __
      |_   _|__ _ _ __| |___ _ _ ___ _ _  ___\\ \\/ /
        | |/ _ \\ '_/ _\` / -_) '_/ _ \\ ' \\/ -_)>  < 
        |_|\\___/_| \\__,_\\___|_| \\___/_||_\\___/_/\\_\\

    I am a web developer from Moscow, Russia.
    ------------------------
    Professional background:

    With 5 years of experience in programming, I have honed my skills in algorithms and data structures, backend and frontend
    technologies, databases, software architecture and cryptography.
    Currently, my primary tech stack comprises a robust set of technologies including TypeScript, React, MobX, Golang and PostgreSQL.
    These tools are the backbone of my development work, enabling me to deliver high-quality, scalable solutions efficiently.
    In addition to my core stack, I bring hands-on experience with a diverse range of technologies such as Vue3, Python, NodeJS, C#, ASP.NET, C++, and MongoDB.
    Recently, I’ve been expanding my expertise into the DevOps domain, actively working with Docker, Kubernetes, and other CI/CD tools.
    ------------------------
    Notable Achievements:

    During my studies, I developed more than 10 pet projects, which include an agile system task manager, a chess web platform,
    an web IDE with build-in leetcode clone, a cryptocurrency with its own blockchain and many others. I also participated and won many hackathons,
    which gave me enormous experience and knowledge.
    ------------------------
    Contact me:

    telegram: @torderone
    discord : torder1x
    github : torderonex
    ------------------------

   
`);


const myProjectsDir : App = createDirectory("My projects", myProjs);

export const desktopApps = [about, myProjectsDir];