import React, { Component } from "react";

export default class actual extends Component{
    
    render(){
        
        return(
            <div className="bg-light">
                <div id="root1"></div>
                <div className="border bg-light pt-5 py-5">
                    <h1 className="text-center">Curso React de cero a experto (Hooks y MERN)</h1>
                    <h1 className="text-center">04 Arreglos</h1>
                </div>
            </div>
            
        );
    }
}


//arreglos en JS
//const arreglo = new Array();

//arreglo normal
const arreglo = [1,2,3,4];

//clonando creando arreglo 2 y cloanando los valores del arreglo 1 y agregando una posicion mas
let arreglo2 = [ ...arreglo, 5 ];

//multiplicando los valores del arreglo 2 por 2
const arreglo3 = arreglo2.map( function(numero){
    return numero * 2;
} );


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);