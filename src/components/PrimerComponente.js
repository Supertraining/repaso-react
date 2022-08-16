import React, {useState} from 'react' //1)importamos el hook useState

export const PrimerComponente = () => {
  // let nombre = 'Matias';
  let web = 'elTapirWeb.com'
//2)Destructuramos un array y definimos [estado, funcion] = useState(default)

const [nombre, setNombre ] = useState('Matías')//[nombre del estado, nombre de la funcion que va a actuar para cambiar ese nombre o estado] = useState(valor por defecto)


  let cursos = [
    "Master en JS",
    "Master en PHP",
    "Master en REACT",
    "Master en CSS"
  ];
//Abajo creamos un boton el cual onClick va a llamar a la funcion cambiarNombre.

//3) Definimos la funcion cambiarNombre que va a ejecutar la funcion setNombre que definimos arriba con el parametro que le pasemos a la funcion onClick cambiarNombre 
const cambiarNombre = (nuevoNombre) => {
  setNombre(nuevoNombre); 
}
//4) la funcion también la podemos ejecutar en un input onChange por ejemplo
//5) podemos crear otro botón que enClick nos muestre el valor actual del estado, que en este caso esta guardado en nombre
//MI NOMBRE ES.. se le puede colocar condicionales a las clases con un ternario, para que me agregue una clase o la otra  
//en este caso las clases rojo y verde las definí en app.css
return (
    <div>
      <h1>PrimerComponente</h1>
      <p>Esto es un texto de mi componente</p>
      <p>Mi nombre es {nombre}</p>
      <p>Mi nombre es: <strong className={nombre.length > 4? 'verde' : 'rojo'}>{nombre}</strong></p>
      <p>Mi sitio web es {web}</p>

      <input type='text' onChange={e => cambiarNombre(e.target.value)} placeholder='Cambia el Nombre a:' />
 
      <button onClick={e => cambiarNombre("Matias José")}> 
        Cambiar nombre 
      </button> 

      <button onClick={e => {
        console.log(`el valor del estado es: ${nombre}`)
      }}>Estado actual</button>
     

      <h2>Cursos:</h2>
      <ul>
        {
          cursos.map((curso, index) => { //utilizo map para iterar el array y aplicarle la funcion
            //cada child debe tener una unica Key (Each child in a list should have a unique "key" prop.), sino me devuelve un error
            return (<li key={index}>            
              {curso}       
            </li>)               
          })          //la func me va a devolver un pedazo de HTML y cada uno de los elementos del array
        }
      </ul>
    </div>
  )
}
