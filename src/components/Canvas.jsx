import React,{useState} from "react";
import {Rnd} from 'react-rnd'
export default function Canvas(){
    const [rnd,setRnd]=useState({width:"100px",height:"100px",x:10,y:10})
    const setPositions=(e,direction)=>{
        setRnd(
            prevRnd=>({...prevRnd,x:direction.x,y:direction.y})
        )
    }
    const setSize=(e,direction,ref,delta,position)=>{
        setRnd(
            prevRnd=>({...prevRnd,width:parseInt(ref.style.width),height:parseInt(ref.style.height),...position})
        )
    }
    return(
        <div>
            <Rnd 
            style={{backgroundColor: "red"}}
            size={{width:rnd.width, height:rnd.height}}
            position={{x:rnd.x,y:rnd.y}}
            onDragStop={setPositions}
            onResizeStop={setSize}
            >

            </Rnd>
            </div>
    )
}