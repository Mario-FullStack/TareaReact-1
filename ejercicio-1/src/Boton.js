import React, {useState} from "react";
import './styles/Boton.css'

function Boton({cargando}) {
  const [cambiarBool, setCambiarBool] = useState(cargando)

  function mensajeBoton() {
    setCambiarBool(current => !current)
    }
  

    return (
      <div>
        <button onClick={mensajeBoton}>
          {cambiarBool ? <span>Cargando</span> : <span>Listo</span>}
        </button>
      </div>
    );
  }
  
  export default Boton;