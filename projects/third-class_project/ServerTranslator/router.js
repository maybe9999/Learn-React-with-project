const express = require('express');
const deepl = require('deepl-node');

const authKey = "5539c084-d8d7-4cc1-908b-66edd6907957:fx";
const translator = new deepl.Translator(authKey);

const router = express.Router();

/* Funciones */
const traducir = async ({textToTranslate, langToTranslate}) => {
    console.log("datos entrantes to function", textToTranslate, langToTranslate)
    const result = await translator.translateText(textToTranslate, null,langToTranslate); /* texto in... txt lang in, txt lang out*/
    return result;
}

const tradFecth = async ({url, data}) => {
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: data
    });
    console.log("Traducir fun fetch", result.text(), "Fin traducir fun fecth");
    return result; // Bonjour, le monde !
}

/* Métodos POST */
router.post("/", async (req, res) => {
    const q = req.query;

    const text = q.text;
    const target_lang = q.target_lang;

    const result = await traducir({textToTranslate:text, langToTranslate: target_lang});

    console.log("devolucion:", result);
    const resultJson = JSON.stringify(result);
    console.log("devolucion:", resultJson);
    console.log("\ntipos,:", typeof(resultJson), typeof(result));
    res.send(resultJson);
})

module.exports = router;

