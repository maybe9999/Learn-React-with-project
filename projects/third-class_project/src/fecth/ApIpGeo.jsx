import { useEffect, useState } from 'react';
import * as dotenv from 'dotenv';

const keyApi = import.meta.env;

const urlCompleta = `https://api.ipregistry.co/?key=`;

export function ApIpGeo(){
    const [data, setData] = useState({});
    const [ip, setIp] = useState("");

    console.log(keyApi)
    
    useEffect(()=>{
        console.log("iniciando fetch a:", urlCompleta)
        fetch(urlCompleta)
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return (<>
        <h3>Análisis de red:</h3>
        <p>{JSON.stringify(data)}</p>
        
    </>)
}