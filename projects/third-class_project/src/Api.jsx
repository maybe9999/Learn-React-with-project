import { useState, useEffect, Children } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const listApi = [
    {"name": "Joke api",
    "link": "https://v2.jokeapi.dev/",
    "id":1
    },
    {"name": "Joke api",
    "link": "https://v2.jokeapi.dev/",
    "id":2
    },
    {"name": "Joke api",
    "link": "https://v2.jokeapi.dev/",
    "id":3
    },
    {"name": "Joke api",
    "link": "https://v2.jokeapi.dev/",
    "id":4
    },
]

export function SearchApi(){
    const { dirApi } = useParams()
    console.log("esto es dirApi: ", dirApi);
    const listadoApi = listApi.filter(elemento => elemento.name == dirApi)

    function checkMatch(){
        if (!listadoApi.length) {
            return (
                <div className="api-container-list-element prueba">
                    <p>{"Sin resultados"}</p>
                </div>
                )
        } else {
            return (listadoApi.map((value, index) => {
                return (
                    <div className="api-container-list-element prueba">
                        <Link key={dirApi} to={value.link}>{value.name}</Link>
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

export function Api(){
    const [ url, setUrl ] = useState("");

    return (
        <main className="main">
            <section className="api-container">
                <div className="api-container-header">
                    <h2 className="api-container-header-title">Listado de Apis:</h2>
                    <div className="api-container-header-search">
                        <input className="api-container-header-search-box" 
                                type="text" 
                                name="searchApi" 
                                id="searchApi" 
                                placeholder="Buscar API" 
                                onInput={(e)=>{setUrl(e.target.value)}}></input>
                        <Link className="api-container-header-search-btn" to={`/api/${url}`}>Search</Link>
                    </div>
                </div>
                <Outlet/>


                <div className="api-container-list">
                    {listApi.map((value, index) => {
                        return(
                            <div className="api-container-list-element" key={value.id}>
                                <Link to={value.link}>{value.name}</Link>
                            </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    );
}