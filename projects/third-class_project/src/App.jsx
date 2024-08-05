import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Header} from "./Header.jsx"
import { Footer } from "./Footer.jsx"

import { Api } from "./Api";
import { Redes } from "./redes";

const Inicio = ()=>{
    return(
        <main className="main">
            <p>En este sitio consumo algunas Api gratis de internet.</p>
        </main>
    )
}
export function App(){
    return (
        <>
        <Header/>
        <Routes >
            <Route path="" element={<Inicio/>}/>
            <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/api" element={<Api/>}/>
            <Route path="/redes" element={<Redes/>}/>
        </Routes>
        <Footer/>
        </>
    )
}