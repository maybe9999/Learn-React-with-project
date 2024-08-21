import { useState, useEffect } from "react";

/* 
"
category: {"Any",{                      Obtener chistes según categoria...
                "Misc",
                "Programming",
                "Dark",
                "Pun",
                "Spooky",
                "Christmas"
                }
            },

lang: [ cs, de, en, es, fr, pt]         Lenguajes admitidos

blacklistFlags:[                        Filtro de chiste
      "nsfw",
      "religious",
      "political",
      "racist",
      "sexist",
      "explicit"
    ],

type: [single, twopart]                 Solo un chiste en una propiedad de un objeto o un chiste dividido en 2 propiedades(partes).

contains:(text search),                 Chistes con el texto especificado

idRange: 0-46                           Rango de ids (limitado según el lenguaje)

amount: 1                               Cantidad de chistes

safe-mode                               Evita los chistes no aptos para todo publico
*/

const JOKES_URL = `https://v2.jokeapi.dev/joke/`;
const CORS_ANYWHERE = "http://localhost:5001/api/" /*'https://cors-anywhere.herokuapp.com/'; */
const TRANSLATE_URL = "https://api-free.deepl.com/v2/translate";

export function ApiJoke({category="Any", lang="lang=en", blacklistFlags="", type="type=single", contains="", idRange="", amount=""}) {
    const [jokes, setJokes] = useState([]);
    const [jokeTranslation, setJokeTranslation] = useState([]);

    const [newChiste, setNewChiste] = useState(false);

    useEffect(() => {
        let urlTemp = `${JOKES_URL}${category}?${lang}&${blacklistFlags}&${type}&${contains}&${idRange}&${amount}`;
        console.log(urlTemp);
        fetch(urlTemp)
            .then(res => res.json())
            .then(data => setJokes(data))
    }, [newChiste])

    useEffect(() => {
        const data = {
                    'text':[jokes.joke || "Hello, world!"],
                    'target_lang':"es",
                    'source_lang':"EN",
                    'target_url':TRANSLATE_URL
                }

        console.log("a traducir:",data.text);
        
        fetch(`${CORS_ANYWHERE}?data=${JSON.stringify(data)}`, {
            method: 'POST',
            mode: "no-cors",
            headers: {
                'Content-Type':'application/json',
            }
        }).then(res =>res.json())
        .then(data => setJokeTranslation(data[0].text))
        .catch(err => console.log(err))
    }, [jokes])

    return (
        <>
            <h2>Joke Api</h2>
            {`Chiste: ${jokes.joke}`}<br/>
            {`Chiste traducido: ${jokeTranslation}`}
            <button onClick={() => setNewChiste(!newChiste)}>Nuevo Chiste</button>
        </>
    );
}

