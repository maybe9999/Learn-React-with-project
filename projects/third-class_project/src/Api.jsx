import { useState, useEffect, Children } from "react";
import { Link, Outlet, useParams, useOutletContext } from "react-router-dom";

const listApi = [
    {"name": "Joke",
    "link": "https://v2.jokeapi.dev/",
    "dirPage" : "/api/q/",
    "id":1
    },
    {"name": "null1",
    "link": "https://v2.jokeapi.dev/",
    "dirPage" : "/api/q/",
    "id":2
    },
    {"name": "null2",
    "link": "https://v2.jokeapi.dev/",
    "dirPage" : "/api/q/",
    "id":3
    },
    {"name": "null3",
    "link": "https://v2.jokeapi.dev/",
    "dirPage" : "/api/q/",
    "id":4
    },
]

export function ApiSearch(){
    let { dirApi } = useParams()
    const listadoApi = listApi.filter(elemento => elemento.name.toLowerCase() == dirApi.toLowerCase()) // Nueva lista con api coincidentes con la búsqueda.

    function checkMatch(){
        if (!listadoApi.length) {
            return (
                <p>{"Sin resultados"}</p>
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

export function ApiQuery(){
    const { query } = useParams()
    const listadoApi = listApi.filter(elemento => elemento.name.toLowerCase() == query.toLowerCase())
    const { listApiVisibility, setListApiVisibility } = useOutletContext()
    console.log("esto es use outlet context: ", useOutletContext);
    console.log("desde api query: ", listApiVisibility);
    function checkMatch(){
        if (!listadoApi.length) {
            return (<p>{`Aca no hay nada ${query}`}</p>)
        } else {
            return (
                <>
                    <p>{"Aca haya algo" }</p>
                </>
            )
        }
    }
    return(
        <>
            {checkMatch()}
        </>
    )
} 


export function Api(){
    const [ url, setUrl ] = useState("");
    const [ titleName, setTitleName ] = useState("Listado de Apis:");
    const [ listApiVisibility, setListApiVisibility ] = useState("");
    const { dirApi } = useParams()

    const updateVisibility = (newState) => {
        setListApiVisibility(newState)
    }

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
                        {/*key={url+toString(Math.floor(Math.random()*100))}*/}
                        <Link className="api-container-header-search-btn" to={`/api/${url ? "s/"+url:""}`}>Search</Link>
                    </div>
                </div>
                <div className="api-container-list search">
                    <Outlet context={{ listApiVisibility, setListApiVisibility }}/>
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