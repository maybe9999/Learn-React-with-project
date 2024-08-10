import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Header} from "./Header.jsx"
import { Footer } from "./Footer.jsx"

import { Api, ApiSearch, ApiQuery} from "./Api";
import { Redes } from "./redes";
import { Inicio } from "./inicio.jsx";

/* Esto es Main, Main contiene sección inicio, Api, Redes */
export function App(){
    return (
        <>
        <Header/>
        <Routes >
            <Route path="" element={<Inicio/>}/>
            <Route path="/inicio" element={<Inicio/>}/>

            <Route path="/api/" element={<Api/>}>
                <Route path="q/:query" element={<ApiQuery />}/>
                <Route path="s/:dirApi" element={<ApiSearch/>}/>
            </Route>
            
            <Route path="/redes" element={<Redes/>}/>
        </Routes>
        <Footer/>
        </>
    )
}