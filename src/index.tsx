import React,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './store/store';
interface IStore{
  store : Store
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = new Store();

export const Context = createContext<IStore>({
  store
})


root.render(
  <React.StrictMode>
    <Context.Provider value={{store }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

