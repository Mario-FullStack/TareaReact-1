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
            <h2>Top 5 de felinos peligrosos</h2>
            {animales.map(({id, name})=>{
                return <p key={id}>El # {id} el el{name}.</p>
            })}
        </div>
    ) 
}

export default TarjetaAnimales;