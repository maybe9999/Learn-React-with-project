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
- Propiedades de style css desde COMPONENTES en JSX: camelCase. (!Importante, se lo debemos pasar como objeto).
- Atributos:</br>
      - className(valor de atributo): No hay estilo de nomenclatura impuesta, se puede usar lo que uno quiera, sugerencia kebab-case.

---------------------------------------------------------------------------------
### Curiosidades:
- Al definir el atributo class desde jsx, no podemos usar class, ya que es una palabra reservada. En su lugar debemos usar className.
- 

---------------------------------------------------------------------------------
### Pasos básicos para crear un sitio react:

1) Importar las bibliotecas requeridas para empezar el proyecto.
```
import React from 'react'
import ReactDOM from 'react-dom/client'
```
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
   * Creación de objeto "raíz" que nos permite renderizar contenido con react en el dom

4) Para agregar elementos al DOM usamos ```.render()```, hará la conversion de sintaxis para mostrar en el HTML lo que le pasamos como parámetro.
```
root.render(
<React.Fragment> 
  <button>Botón</button>
  <button>Botón</button>
  <button>Botón</button>
  <button>Botón</button>
</React.Fragment>
);
```
   * ```render()``` acepta un elemento, entonces usamos ```<react.fragment>``` para evitar crearnos una etiqueta innecesaria que estaría de más en el código. ```<react.fragment>``` es simplemente un envoltorio que NO agregara una etiqueta más, es un envoltorio transparente, impalpable, inexistente. Una version simplificada de ```<React.Fragment>``` es ```<> elementos aca </>```, esto es lo mismo pero simplificado.

---------------------------------------------------------------------------------
### Aplicación de componentes:
**Componentes:**
```
//Componente BIEN definido
const Button = ({text}) => {
    return <button>{text}</button>
}

//Componente MAL definido
const specialButton = ({text}) => {
    return <button>{text}</button>
}
```

**Renderizado:**

**Incorrecto**, React solo reconoce **PascalCase** como componente, el código del ejemplo lo renderiza como un elemento HTML y NO como un componente:
```
root.render{
    <React.Fragment>
        <specialButton text="Botón 1"/>
        <specialButton text="Botón 1"/>
        <specialButton text="Botón 1"/>
    </React.Fragment>
}
```

**Incorrecto**, lo estamos definiendo de forma **imperativa** ya que le estamos diciendo que queremos **crear** un botón:
```
root.render(
    <React.Fragment> 
        {Button({ text: "Botón 1"})}
    </React.Fragment>
);
```

**Correcto**, lo estamos definiendo de forma **declarativa** por que le decimos que queremos **mostrar** un botón (Button apunta al componente que definimos).
```
root.render(
    <React.Fragment> 
        <Button text="Botón 1"/> //Los parámetros se lo pasamos como un atributo.
        <Button text="Botón 1"/>
        <Button text="Botón 1"/>
    </React.Fragment>
);
```

---------------------------------------------------------------------------------
### Datos útiles:

**Llaves ```{ }```:**
Solo se deben poner entre llaves expresiones que devuelven un resultado: (funciones(), variables, valores(2, "re")); y no declaraciones: (if).

**Diferencias entre Componentes y Elementos:**
- **Componentes**: Son **funciones** que **devuelven elementos**.
- **Elementos**: Es el elemento que react **renderiza** en el **DOM**.

**Props especiales:**
- **children**: Es el contenido que se le pasa a un componente, este contenido sera el **hijo** o todo lo que **envuelve** dicho elemento, **incluido texto**.

**Errores comunes:**
- Modificar la props directamente. Razon: Las **props deben ser inmutables**.

Incorrecto, (Se modifica la props), el que funcione no significa que este bien:
```
export function ButtonCard({name, surname, email}){
    name = `@${name}`;
    return <div>{name}</div>
}
```

Correcto, no se modifica la props. Funciona y esta bien ya que Rect tiene la seguridad de lo que esta renderizando.
```
export function ButtonCard({name, surname, email}){
    const nameLocal = `@${name}`;
    return <div>{nameLocal}</div>
}
```

---------------------------------------------------------------------------------
### Definiciones, utilidades y analogías:

- **COMPONENTES**:
    - **Definición**: Un componente es una función que crea un elemento 
    - **Utilidades**: Al usar componentes nos evitamos tener que crear multiples elementos iguales en el caso de necesitar multiples elementos, estamos modulando y reutilizando código.
    - **Analogía**: Un componente es como una pieza de lego que diseñamos nosotros con un diseño único, esta pieza de lego la podemos reutilizar, personalizar, ajustar y adaptar a nuestras necesidades de forma dinámica en base a lo que necesitemos.
    - **Sintaxis**: Los nombres de los componentes deben ser: no "createButton" sino "Button".
    React no tiene forma de diferenciar si lo que esta escrito es un componente o un elemento HTML, la forma que tiene para diferenciarlo es usando PascalCase.
    - **Arquitectura**: se lo suelen crear de forma modular en un archivo separado.

- 
