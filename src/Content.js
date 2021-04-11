import React, { Component } from "react";
import scp from "./scpjson.json";

const SCP = scp.map(
    (scp) => 
    {
        return(
           
            <div key={scp}>
                
                <b><h3>{scp.item}</h3></b>
                <p class="text-justify"> <b>Object class: </b>  {scp.object}</p>
                <p class="text-justify"> <b>Special Containment Procedures: </b> {scp.procedure}</p>
                <p class="text-justify"> <b>Description: </b> {scp.description}</p>
                <br></br>
                <hr></hr>
           </div>
            );
        }
    );

class Content extends Component {
    render() {
        return (
            
            <div className="container-fluid">
                   {SCP}
            </div>
        );
    }
}

export default Content;
