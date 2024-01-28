import { createTextDocument } from "../utils/createApp";
import type { App } from "../types/App";

export const help : App = createTextDocument('Help', `
    You have come to my portfolio site stylized for Windows 95

    Tips for use:
    - You can drag windows anywhere by holding the mouse button on the window header
    - Also by holding the mouse button on the lower right corner you can scale the window
    - The task bar is functional so you can switch to applications using it  

    github repository: https://github.com/torderonex/portfolio
`)

