import React, { Component } from "react";

export default class actual extends Component{
    
    render(){
        
        return(
            <div className="bg-light">
                <div id="root1"></div>
                <div className="border bg-light pt-5 py-5">
                    <h1 className="text-center">Curso React de cero a experto (Hooks y MERN)</h1>
                    <h1 className="text-center">05 funciones</h1>
                </div>
            </div>
        );
    }
}

//funciones

//no declarar funciones asi
/*function saludar (nombre){
    return `Hola, ${nombre}`;
}*/

//las funciones en react se declaran asi
const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

//funcion de flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

//funcion de flecha mas simplificada
const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola mundo`

console.log( saludar );
console.log( saludar2('arreglo 2 Francisco') );
console.log( saludar3('arreglo 3Francisco') );
console.log( saludar4() );

//de esta manera se crean objetos
const getUser = () => ({
        uid: 'ABC123',
        username: 'javi yankee'
    });
const user = getUser();
console.log( user);

//TAREA
//1. tranformar a una funcion de flecha
//2. tiene que retornar un objeto implicito
//3. pruebas
const getUsuarioActivo = (nombre) => ({
        uid: 'ABC123',
        username: nombre
    });

const usaurioactivo = getUsuarioActivo('Francisco');
console.log(usaurioactivo)

