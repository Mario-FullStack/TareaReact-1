import React from "react";

function TarjetaAnimales() {
    let animales = [
        { id: 1, name: ' Leon'},
        { id: 2, name: ' Tigre'},
        { id: 3, name: ' Pantera'},
        { id: 4, name: ' Lince'},
        { id: 5, name: ' Gato'}
    ]

    return (
        <div>
            {animales.map(({id, name})=>{
                return <h1>{id}{name}</h1>
            })}
        </div>
    ) 
}

export default TarjetaAnimales;