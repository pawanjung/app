import React, { Component } from "react";
import scp from "./scpjson.json";
import lastscp from "./scp-six.json";
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
    
    const final = lastscp.map(
        (lastscp) => 
        {
            return(
               
                <div key={lastscp}>
                    
                    <b><h3>{lastscp.item}</h3></b>
                    <p class="text-justify"> <b>Object class: </b>  {lastscp.object}</p>
                    <p class="text-justify"> <b>Special Containment Procedures: </b> {lastscp.procedure}</p>
                    <ol>
                        <li>{lastscp.l1}</li>
                        <li>{lastscp.l2}</li>
                        <li>{lastscp.l3}</li>
                        <li>{lastscp.l4}</li>
                    </ol>
                    <p class="text-justify"> <b>Description: </b> {lastscp.description}</p>
                    <br></br>
                  
               </div>
                );
            }
        );
    

class Content extends Component {
    render() {
        return (
            
            <div className="container-fluid">
                   {SCP}
                   {final}
            </div>
        );
    }
}

export default Content;
