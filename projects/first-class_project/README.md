# Notas de clase y conceptos (React 1):

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
- Es posible hacer comentarios en el return, donde se devuelve el código para renderizar, de la siguiente forma {/* comentario*/}, si se usa // se mostrara el comentario en el html...

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

- **Llaves ```{ }```:**
Solo se deben poner entre llaves expresiones que devuelven un resultado: (funciones(), variables, valores(2, "re")); y no declaraciones: (if).

- **Diferencias entre Componentes y Elementos:**
    - **Componentes**: Son **funciones** que **devuelven elementos**.
    - **Elementos**: Es el elemento que react **renderiza** en el **DOM**.

-**Props especiales:**
    - **children**: Es el contenido que se le pasa a un componente, este contenido sera el **hijo** o todo lo que **envuelve** dicho elemento, **incluido el texto**.
    - **ejemplo**:
    ```
    function UserCard({children, name, surname}){
        return (
        <>
            <div>{children}</div>
            <div>{name}</div>
            <div>{surname}</div>
        </>)
    }

    function App(){
        return (
            <section>
                <UserCard name="Pablo" surname="Lopez">
                    este es el children que se capturara en params, es indiferente si es una etiqueta o cadena de texto
                </UserCard>
            </section>
        )
    }
    ```

- **Rest opereator {... name}:**
    - Nos permiten pasar **todas las propiedades de un objeto** que esta definido en una variable **como props a un componente**, a veces es mejor ser declarativo en ves de pasar valores de esta forma:
    ```
    function App(){
        const user1 = {isFollowing: true, userName:"joker"}
        return (
            <section>
                <UserCard {... user1}>
                    este es el children que se capturara en params, es indiferente si es una etiqueta o cadena de texto
                </UserCard>
            </section>
        )
    }
    ```
    Contras:
    - Muchas veces se envía información que no es necesaria
    - Puede hacer que el componente por temas de optimización de se rerenderize sin necesidad
    - Hace mas difícil de saber/leer que información le esta llegando al usuario

- **Errores comunes:**
    - **Props:** Modificar la props directamente. Razón: Las **props deben ser inmutables**.
        - Ejemplo:
        **Incorrecto**, (Se modifica la props), el que funcione no significa que este bien:
        ```
        export function ButtonCard({name, surname, email}){
            name = `@${name}`;
            return <div>{name}</div>
        }
        ```
        
        **Correcto**, no se modifica la props. Funciona y esta bien ya que se tiene seguridad sobre lo que se esta renderizando:
        ```
        export function ButtonCard({name, surname, email}){
            const nameLocal = `@${name}`;
            return <div>{nameLocal}</div>
        }
        ```
    - **Comentarios:** Usar comentarios en la sección donde devolvemos código a renderizar usando //.
        - Ejemplo:
        **Incorrecto**, (Se usa // para comentar el código):
        ```
        function UserCard({children, name, surname, isFollowing}){
            return (
            <>
                //Comentario incorrecto, el comentario se mostrara en el HTML
                <div>{children}</div>
                <div>{name}</div>
                <div>{surname}</div>
            </>
            )
        }
        ```

        **Correcto**, (Se usa {/**/} para comentar el código):
        ```
        function UserCard({children, name, surname, isFollowing}){
            return (
            <>
                {/*, el comentario NO mostrara en el HTML*/}
                <div>{children}</div>
                <div>{name}</div>
                <div>{surname}</div>
            </>
            )
        }
        ```

- **Rendirizado condicional:**
    - Dependiendo de un condición el código se va a mostrar de determinada forma o no.
    - Ejemplo: 
    ```
    function UserCard({children, name, surname, isFollowing}){
        const botonEstado = isFollowing ? "nombre-de-clase-de-elemento otro-nombre-si-hay-follow" : "nombre-de-clase-de-elemento";
        return (
        <>
            <div className={botonEstado}>{children}</div>
            <div>{name}</div>
            <div>{surname}</div>
        )
    }
    ```


---------------------------------------------------------------------------------
### Definiciones, utilidades y analogías:

- **COMPONENTES**:
    - **Definición**: Un componente es una función que crea un elemento 
    - **Utilidades**: Al usar componentes nos evitamos tener que crear multiples elementos iguales en el caso de necesitar multiples elementos, estamos modulando y reutilizando código.
    - **Analogía**: Un componente es como una pieza de lego que diseñamos nosotros con un diseño único, esta pieza de lego la podemos reutilizar, personalizar, ajustar y adaptar a nuestras necesidades de forma dinámica en base a lo que necesitemos.
    - **Sintaxis - Reglas de uso**: Los nomenclatura de los nombres en los componentes deben ser: ```PascalCase```. React no tiene forma de diferenciar si lo que esta escrito es un componente o un elemento HTML, la forma que tiene para diferenciarlo es usando ```PascalCase```.
    - **Arquitectura**: Se lo suelen crear de forma modular en un archivo separado.
    - **Ejemplo de uso**:
    ```
    const Button = ({text}) => {
        return <button>{text}</button>
    }
    ```

- **Hoks (Estados):**
    - **Definición**: Son funciones que se ejecutan cuando se renderiza un componente.
    - **Utilidad**: Permiten añadir funcionalidades a los componentes de React. Ejecutar código arbitrario cuando se ocurre determinadas cosas en los componentes. Son exclusivas de cada instancia de componente, no afecta a otras instancias del mismo componente.
    - **Analogía**: Son como nuevas piezas de Lego que puedes conectar directamente a tu construcción actual para modificar funcionalidades extra, como luces, movimiento, o piezas decorativas, sin necesidad de reconstruir todo el modelo desde el principio.
    - **Sintaxis - Reglas de uso**: Se requiere importar la función. Pasarle un parámetro y desestructurar el array que da como output en 2 variables. La primera el valor y la segunda la que modifica el valor(crear callback).
    - **Arquitectura**: Se lo crea dentro del mismo componente donde se lo usa.
    - **Ejemplo de uso**: 
    ```
    import {useState} from "react"
    function Follow({isFollowing}){
        //Version extendida
        const state = useState(isFollowing); // True  or False
        const isFollow = state[0]; //Valor del estado
        const setIsFollow = state[1]; //Interruptor (Función) para cambiar el estado.

        //Version corta
        const [isFollow, setIsFollow] = useState(isFollow); //Version abreviada, desestructurada.

        const handleClick = () => setIsFollow(!isFollow);

        return <Button onClick={handleClick()}>{`${isfollow}`}</Button>
    }
    ```

- **key:**
    - **Definición**: Es un identificador **único** que asignamos a un componente cuando lo llamamos.
    - **Utilidad**: Es necesario para que react pueda identificar los componentes y saber si dicho componente ya estaba renderizado o no, es especialmente util cuando trabajamos con listas de datos...
    - **Analogía**: Es como un numero de pieza que actúa como identificador único que le asignamos a una pieza de lego.
    - **Sintaxis - Reglas de uso**: Se lo asigna como propiedad a un componente. Debe ser único y constante, es decir dicho elemento siempre debe tener ese identificador y no cambiar.
    - **Arquitectura**: Se lo asigna en el momento de llamar al componente cuando le pasamos una lista de elementos para que cree diversos componentes.
    - **Ejemplo de uso**:
    ```
    const list=[
        {id:1, name:"Juan"},
        {id:2, name:"Pedro"},
        {id:3, name:"Tomas"},
    ]
    export function App (){
        return (
            <>
                {list.map(user () =>{
                    return <p key={user.id}>
                        {user.name}
                    </p>
                })}
            </>
        )
    }

    ```

### Instalacion:

npm create vite@latest
(opcion vanilla, js)

**Instalando plugin de react**
npm install @vitejs/plugin-react -E
(-E : version exacta)

**Instalando dependencias**
npm install react react-dom react-router-dom -E

(react-router: tiene el core del enrutado, no tiene la api suficiente para conectarse con el navegador
react-router-dom: tiene la api de historia(la del navegador), ademas del core tambien tiene los bindings para conectarse con el navegador)

**vite.config.js:**
    ```
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react-swc'

    // https://vitejs.dev/config/
    export default defineConfig({
    plugins: [react()],
    })
    ```

**Punto de entrada:**
    ```
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import { App } from "./app" //Componente
    import "./style.css"


    const elementRoot = document.getElementById('root')

    const root = ReactDOM.createRoot(elementRoot);

    root.render(
    <App />
    );
    ```

    