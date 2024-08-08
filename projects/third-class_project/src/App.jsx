import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Header} from "./Header.jsx"
import { Footer } from "./Footer.jsx"

import { Api, SearchApi} from "./Api";
import { Redes } from "./redes";
import { Inicio } from "./inicio.jsx";


export function App(){
    return (
        <>
        <Header/>
        <Routes >
            <Route path="" element={<Inicio/>}/>
            <Route path="/inicio" element={<Inicio/>}/>

            <Route path="/api/" element={<Api/>}>
                <Route path=":dirApi" element={<SearchApi/>}/>
            </Route>
            
            <Route path="/redes" element={<Redes/>}/>
        </Routes>
        <Footer/>
        </>
    )
}