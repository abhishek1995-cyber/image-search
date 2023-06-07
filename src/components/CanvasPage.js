import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { fabric } from "fabric";

export default function CaptionPage() {

  const [url, setUrl ] = useState('')
  const { id } = useParams();

   useEffect(()=> {
    fetch(`https://api.unsplash.com/photos/${id}?client_id=1ZoH8qVlRyQSqTcRpTAkqum6HRm3B9h61Ri5OVZuJdk`).then((res) => res.json())
    .then((data) => setUrl(data.urls.small))
   },[id])

   console.log(url,"url");

   useEffect(() => {
    const canvas = new fabric.Canvas('canvas');
    fabric.Image.fromURL(url, (img) => {
      canvas.add(img)
    });
  }, [url]);


  return (
    <div className="canvas">
    <div>
      <canvas id="canvas" width={400} height={300}></canvas>
      </div>
      <div className="canvas-btn" >
      <button id="addCaptionsBtn">Add Captions</button>
        <button id="triangle">Add Triangle</button>
        <button id="circle">Add Circle</button>
        <button id="rectangle">Add Rectangle</button>
        <button id="polygon">Add Polygon</button>
    </div>
    </div>
  );
}
