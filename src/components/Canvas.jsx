import React,{useState} from "react";
import {Rnd} from 'react-rnd'
export default function Canvas(){
    const [rnd,setRnd]=useState({width:"100px",height:"100px",x:10,y:10})
    return(
        <div>
            <Rnd 
            style={{backgroundColor: "red"}}
            size={{width:rnd.width, height:rnd.height}}
            position={{x:rnd.x,y:rnd.y}}
            >

            </Rnd>
            </div>
    )
}