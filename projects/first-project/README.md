# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


---------------------------------------------------------------------------------

# Notas de clase y conceptos:

---------------------------------------------------------------------------------
### Nomenclaturas:
- Componentes: PascalCase (!Importante)
- Props: camelCase
- Propiedades de style css desde COMPONENTES en JSX= camelCase (!Importante, se lo debemos pasar como objeto).
- Atributos:</br>
      - className(valor de atributo): No hay estilo de nomenclatura impuesta, se puede usar lo que uno quiera, sugerencia kebab-case.

---------------------------------------------------------------------------------
### Curiosidades:
- Al definir el atributo class desde jsx, no podemos usar class, ya que es una palabra reservada. En su lugar debemos usar className.
- 

---------------------------------------------------------------------------------
### Pasos básicos para crear un sitio react:

1) Importar las bibliotecas requeridas para empezar el proyecto.
"""
import React from 'react'
import ReactDOM from 'react-dom/client'
"""
   * Están localmente, sino se debería traerlas desde la web.

2) Traer desde el HTML nuestra etiqueta raíz (Lo vemos como si fuera un árbol).
```
const elementRoot = document.getElementById('root')
```
   * Esto es un elemento DOM, que es un elemento de la página web.

3) Creamos un objeto raíz donde podremos insertar contenido en base al elementRoot facilitando asi la manipulación del DOM, renderizar y actualizar.
```
const root = ReactDOM.createRoot(elementRoot);
```
   * Creación de objeto "raiz" que nos permite renderizar contenido con react en el dom

4) Para agregar elementos al DOM usamos .render(), hará la conversion de sintaxis para mostrar en el html lo que le pasamos como parámetro.
```
root.render(
<React.Fragment> 
  <button>Boton</button>
  <button>Boton</button>
  <button>Boton</button>
  <button>Boton</button>
</React.Fragment>
);
```
   * render() solo acepta un elemento, entonces hacemos react.fragment para evitar crearnosb una etiqueta que estaría de mas. react.fragment es simplemente un envoltorio que no agregara una etiqueta mas, es un envoltorio transparente, impalpable, inexistente.

---------------------------------------------------------------------------------
### Aplicación de componentes:
```
//Componentes
const Button = ({text}) => {
    return <button>{text}</button>
}

const specialButton = ({text}) => {
    return <button>{text}</button>
}
```


Incorrecto, React solo reconoce PascalCase como componentes, el codigo del ejemplo lo renderizara como un elemento HTML y NO como un componente.
```
root.render{
    <React.Fragment>
        <specialButton text="Boton 1"/>
        <specialButton text="Boton 1"/>
        <specialButton text="Boton 1"/>
    </React.Fragment>
}
```

Incorrecto, es imperativo ya que le estamos diciendo que queremos crear un boton
```
root.render(
    <React.Fragment> 
        {Button({ text: "Boton 1"})}
    </React.Fragment>
);
```

Correcto, es declarativo por que le decimos que queremos mostrar un boton.
```
root.render(
    <React.Fragment> 
        <Button text="Boton 1"/> //Los paarametros se lo pasamos como un atributo.
        <Button text="Boton 1"/>
        <Button text="Boton 1"/>
    </React.Fragment>
);
```

---------------------------------------------------------------------------------
Llaves {}:
Solo se deben poner expresiones que devuelven un resultado: (funciones(), variables, valores(2, "re"); y no declaraciones: (if).


---------------------------------------------------------------------------------
### Definiciones, utilidades y analogías:

- COMPONENTES:
    - Definición: Un componente es una función que crea un elemento 
    - Utilidades: Al usar componentes nos evitamos tener que crear multiples elementos iguales en el caso de necesitar multiples elementos, estamos modulando y reutilizando código.
    - Analogía: Un componente es como una pieza de lego que diseñamos nosotros con un diseño único, esta pieza de lego la podemos reutilizar, personalizar, ajustar y adaptar a nuestras necesidades de forma dinámica en base a lo que necesitemos.
    - Sintaxis: Los nombres de los componentes deben ser: no "createButton" sino "Button".
    React no tiene forma de diferenciar si lo que esta escrito es un componente o un elemento HTML, la forma que tiene para diferenciarlo es usando PascalCase.
    - Arquitectura: se lo suelen crear de forma modular en un archivo separado.

- 
