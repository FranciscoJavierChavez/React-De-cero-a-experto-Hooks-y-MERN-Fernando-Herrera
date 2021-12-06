import React, { Component } from "react";

export default class actual extends Component{
    
    render(){
        
        return(
            <div className="bg-light">
                <div id="root1"></div>
                <div className="border bg-light pt-5 py-5">
                    <h1 className="text-center">Curso React de cero a experto (Hooks y MERN)</h1>
                    <h1 className="text-center">Seccion actual</h1>
                </div>
            </div>
            
        );
    }
}

//desestruturacion
//asignacion desestructurante

const persona = {
    nombre: 'Francisco',
    edad:45,
    clave: 'javiyankee'
};

//extraer solo campo especifico, en las llaves se
//pone el campo y despues del "=" se pone la constante
const {nombre} = persona;

console.log(nombre);

const retornaPersona = ({clave,nombre, edad,rango='Capitan'}) => {
    //console.log(nombre,edad,rango);

    return {
        nombreClave: clave,
        anios:edad,
        latlng:{
            lat:14.33333,
            lng: -12.32423
        }
    }
}

const {nombreClave, anios,latlng:{lat,lng}} = retornaPersona(persona);
console.log(nombreClave,anios);
console.log(lat,lng);