import React,{useState} from "react";
import {Rnd} from 'react-rnd'
export default function Canvas(){

    const [rnd,setRnd]=useState({width:"100px",height:"100px",x:10,y:10})
    const [images,setImages]=useState([])


    const styles = {
  container: {
    position: "relative",
    width: "800px",
    height: "600px",
    border: "1px solid black",
    overflow: "auto",  // or "hidden" based on need
    background: "#f9f9f9",
  },
  uploadButton: {
    padding: '8px 16px',
    background: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    marginBottom: '10px'
  }
};

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
    const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        const width = 200;
        const height = width / aspectRatio;
        
        setImages(prev => [
          ...prev,
          {
            id: prev.length + 1,
            src: e.target.result,
            position: { x: 100, y: 100 + prev.length * 50 },
            size: { width, height }
          }
        ]);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };
        
    
  ;
    return (
  <div>
    <div>
      <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
    </div>

    <div style={styles.container}>
      {images.map((image) => (
        <Rnd
          key={image.id}
          default={{
            x: image.position.x,
            y: image.position.y,
            width: image.size.width,
            height: image.size.height,
          }}
          bounds="parent"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "move",
            bounds:"parent",
            border:"1px solid black"
          }}
        >
          <img
            src={image.src}
            alt="Uploaded content"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              pointerEvents: "none",
            }}
          />
        </Rnd>
      ))}

      <Rnd
        style={{ backgroundColor: "red" }}
        size={{ width: rnd.width, height: rnd.height }}
        position={{ x: rnd.x, y: rnd.y }}
        onDragStop={setPositions}
        onResizeStop={setSize}
        bounds="parent"
      />
    </div>
  </div>
);

}