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
    let { dirApi } = useParams()
    const listadoApi = listApi.filter(elemento => elemento.name == dirApi) // Nueva lista con api coincidentes con la búsqueda.

    function checkMatch(){
        if (!listadoApi.length) {
            return (
                <p>{"Sin resultados"}</p>
                )
        } else {
            return (listadoApi.map((value, index) => {
                return (
                    <div key={dirApi} className="api-container-list-element prueba">
                        <Link to={value.link}>{value.name}</Link>
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
    const [ titleName, setTitleName ] = useState("Listado de Apis:");
    let { dirApi } = useParams()
    const [ listApiVisibility, setListApiVisibility ] = useState("");

    useEffect(()=>{
        if (dirApi){
            setTitleName("Resultado de busqueda:");
            setListApiVisibility(" hidden");
        }else {
            setTitleName("Listado de Apis:");
            setListApiVisibility("");
        }
    },[dirApi])

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
                        <Link key={url+toString(Math.floor(Math.random()*100))} className="api-container-header-search-btn" to={`/api/${url}`}>Search</Link>
                    </div>
                </div>
                <div className="api-container-list search">
                    <Outlet/>
                </div>

                <div className={"api-container-list search"+listApiVisibility}>
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