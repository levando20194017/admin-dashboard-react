import React, { useRef, useState } from "react";
import DrawableCanvas from "react-drawable-canvas";

function Test() {
  const [image, setImage] = useState(null);
  const canvasRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
      console.log(image);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDrawingFinish = (dataUrl) => {
    // Handle the drawn image data
    console.log("Drawn image data:", dataUrl);
  };

  const handlePolygonDraw = () => {
    // Enable polygon drawing mode
    canvasRef.current.setDrawingMode("polygon");
  };

  const handleBoundingBoxDraw = () => {
    // Enable bounding box drawing mode
    canvasRef.current.setDrawingMode("rectangle");
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && (
        <div>
          <DrawableCanvas
            ref={canvasRef}
            canvasWidth={500}
            canvasHeight={500}
            imageSrc={image}
            onDrawingFinish={handleDrawingFinish}
          />
          <button onClick={handlePolygonDraw}>Draw Polygon</button>
          <button onClick={handleBoundingBoxDraw}>Draw Bounding Box</button>
        </div>
      )}
    </div>
  );
}

export default Test;
