import React, { Component } from "react";

export default class template extends Component{
    
    render(){
        
        return(
            <div className="bg-light">
                <div id="root1"></div>
                <div className="border bg-light pt-5 py-5">
                    <h1 className="text-center">Curso React de cero a experto (Hooks y MERN)</h1>
                    <h1 className="text-center">02 template string</h1>
                </div>
            </div>
            
        );
    }
}

const nombre = 'Francisco';
const apellido = 'Chavez';

//const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `Hola mi nombre es ${nombre} ${apellido} con el id ${1+1}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola mundo ' + nombre;
}
console.log(`este es un texto: ${getSaludo(nombre)}`);