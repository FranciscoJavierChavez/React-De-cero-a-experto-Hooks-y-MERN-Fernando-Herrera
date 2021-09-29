import React, { Component } from "react";

export default class IntroJa extends Component{
    
    render(){
        
        return(
            <div className="bg-light">
                <div id="root1"></div>
                <div className="border bg-light pt-5 py-5">
                    <h1 className="text-center">Curso React de cero a experto (Hooks y MERN)</h1>
                    <h1 className="text-center">02 introduccion a javascript</h1>
                </div>
            </div>
            
        );
    }
}

//variables= let y constantes = const

//las constantes son para valores que nunca cambian
//las variables let son para valores que sufren cambios

const nombre = 'Francisco';
const apellido = 'Chavez';

let valorDado = 5;
valorDado = 4;
console.log(nombre,apellido,valorDado)

if (true)
{
    const nombre = 'Hector';
    let valorDado = 6;
    console.log(valorDado);
    console.log(nombre);
}

console.log(valorDado);

    