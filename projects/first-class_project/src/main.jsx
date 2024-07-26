import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from "./app" //Componente
import "./style.css"


const elementRoot = document.getElementById('root')

const root = ReactDOM.createRoot(elementRoot);

root.render(
  <App />
);
