import React, { Component } from "react";

export default class actual extends Component{
    
    render(){
        
        return(
            <div className="bg-light">
                <div id="root1"></div>
                <div className="border bg-light pt-5 py-5">
                    <h1 className="text-center">Curso React de cero a experto (Hooks y MERN)</h1>
                    <h1 className="text-center">03 Objetos Literales</h1>
                </div>
            </div>
            
        );
    }
}

const persona = {
    nombre: 'Francisco',
    apellido: 'Chavez',
    edad: 45,
    direccion:{
        ciudad: 'Puerto vallarta',
        zip: 3221212212,
        lat: 14.2323,
        lng: 34.9828293,

    }
};

console.table({persona});

const persona2 = {
    ...persona
};
persona2.nombre='Peter';

console.log(persona2);