import React, {useState, useEffect} from "react";
import './styles/TarjetaIncrementar.css'

function TarjetaIncrementar() {
    const [currentTime, setCurrentTime] = useState(0)
    const [previousTime, setPreviousTime] = useState(0)

    useEffect(()=>{
        if (currentTime > 1) {
            setPreviousTime(previousTime+1)
        }

    },[currentTime])

    function incrementar() {
        setCurrentTime(currentTime+1)
    }
    

    return (
      <div>
        <h5>Current Time: {currentTime}</h5>
        <h5>Previous Time: {previousTime}</h5>
        <button onClick={incrementar}>
          Incrementar
        </button>
      </div>
    );
  }
  
  export default TarjetaIncrementar;