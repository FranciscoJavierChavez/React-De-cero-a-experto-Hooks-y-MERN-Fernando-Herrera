import React, { Component } from "react";

export default class Home extends Component{
    render(){
        return(
            <div className="bg-light">
                <div className="border bg-light pt-5 py-5">
                    <h1 className="text-center">Curso React de cero a experto (Hooks y MERN)</h1>
                    <h1 className="text-center">Autor: FERNANDO HERRERA</h1>
                </div>
                <div>
                    <div className="list-group">
                        <a href="/01intro" className="list-group-item list-group-item-action">01 intro react</a>
                        <a href="/02intro" className="list-group-item list-group-item-action">02 intro javascript</a>
                    </div>
                </div>
            </div>
            
        );
    }
}