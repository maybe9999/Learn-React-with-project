import { useState, useEffect, Children } from "react";
import { Link, Outlet, useParams, useNavigate  } from "react-router-dom";

import { ApiJoke } from "./fecth/Joke.jsx";
import { ApIpGeo } from "./fecth/ApIpGeo.jsx";

//Consultas :

const listApi = [
    {"name": "Joke",
    "link": "https://v2.jokeapi.dev/",
    "dirPage" : "/api/q/",
    "id":1,
    "component": <ApiJoke/>
    },
    {"name": "Ip y Geo",
    "link": "https://api.ipregistry.co/?key=td9qudbcx0xrd45i", 
    "link2": "https://ipapi.co/json/",
    "dirPage" : "/api/q/",
    "id":2,
    "component": <ApIpGeo/>
    },
    {"name": "null2",
    "link": "https://v2.jokeapi.dev/",
    "dirPage" : "/api/q/",
    "id":3,
    "component": <ApiJoke/>
    },
    {"name": "null3",
    "link": "https://v2.jokeapi.dev/",
    "dirPage" : "/api/q/",
    "id":4,
    "component": <ApiJoke/>
    },
];

//Buscador de Api
export function ApiSearch(){
    let { dirApi } = useParams()
    const listadoApi = listApi.filter(elemento => elemento.name.toLowerCase() == dirApi.toLowerCase()) // Nueva lista con api coincidentes con la búsqueda.

    function checkMatch(){
        if (!listadoApi.length) {
            return (
                <p>{`Sin resultados para: ${dirApi}`}</p>
                )
        } else {
            return (listadoApi.map((value, index) => {
                return (
                    <div key={value.id} className="api-container-list-element prueba">
                        <div>{`Api: ${value.name}`}</div><br/>
                            <Link to={value.link} target="_blank">Link oficial</Link>
                            <Link to={value.dirPage}>Query</Link>
                    </div>
                    )
            }))
        }
    }
    return (
        <>
           {checkMatch()}
        </>
    )
}

//Aca se maneja hacia que api se hace la consulta
export function ApiQuery(){
    const { query } = useParams()
    //Se buscan coincidencias coincidencias con Apis existentes
    const listadoApi = listApi.filter(elemento => elemento.name.toLowerCase() == query.toLowerCase())
    function checkMatch(){
        if (!listadoApi.length) <p>{`Aca no hay nada ${query}`}</p>
        else {
            let componente = listadoApi.map((elemento) => elemento.component);
            return (componente)
        }
    }
    return(
        <>
            {checkMatch()}
        </>
    )
} 

export function Api(){
    const [ url, setUrl ] = useState(""); //Url de busqueda, contiene el texto ingresado x user.
    const [ titleName, setTitleName ] = useState("Listado de Apis:"); 
    const [ listApiVisibility, setListApiVisibility ] = useState(""); //Para ocultar el listado de apis.
    const { dirApi, query } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if (dirApi || query){
            setTitleName("Resultado de búsqueda:");
            setListApiVisibility(" hidden");
        }else {
            setTitleName("Listado de Apis:");
            setListApiVisibility("");
        }
    },[dirApi, query])

    useEffect(()=>{
        navigate(`/api/${url ? "s/"+url:""}`)
    },[url])

    return (
        <main className="main">
            <section className="api-container">
                <div className="api-container-header">
                    <h2 className="api-container-header-title">{titleName}</h2>
                    <div className="api-container-header-search">
                        <input className="api-container-header-search-box" 
                                type="text" 
                                name="searchApi" 
                                id="searchApi" 
                                placeholder="Buscar API" 
                                onInput={(e)=>{setUrl(e.target.value)}}></input>
                    </div>
                </div>
                <div className="api-container-list search">
                    <Outlet/>
                </div>

                <div className={"api-container-list search "+listApiVisibility}>
                    {listApi.map((value, index) => {
                        return(
                            <div className="api-container-list-element" key={value.id}>
                                <div>{`Api: ${value.name}`}</div><br/>
                                <Link to={value.link} target="_blank">Link oficial</Link>
                                <Link to={`${value.dirPage}${value.name}`}>Query</Link>
                            </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    );
}