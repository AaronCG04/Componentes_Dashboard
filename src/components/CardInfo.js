import React from "react";
import CircularProgres from "./CircularProgres";
import './CardInfo.css'
const CadrInfo = ({titulo,numero,width,color})=>{
    const redondeado= width * 0.03;
    return(
        <div className="main" style={{width:width,borderRadius: redondeado}}>
            <p className="titulo" style={{marginTop:width * 0.026,marginLeft:width*0.036,fontSize:width*0.074}}>{titulo}</p>
            <div className="container">
                <div className="numero container">
                    <p style={{fontSize:width*0.20, margin:0,marginRight:width*0.078,marginLeft:width*0.052}}>{numero}</p>
                </div>
                <div className="container">
                    <CircularProgres porcentaje={75} size={width*0.52} color={color}></CircularProgres>
                </div>
            </div>
        </div>
    )   
}

export default CadrInfo