import { useState, useEffect } from "react";

const JOKES_URL = 'https://'
export function ApiJoke(){
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        fetch(JOKES_URL)
            .then(res => res.json())
            .then(data => setJokes(data))
    }, [])

    return jokes;

}