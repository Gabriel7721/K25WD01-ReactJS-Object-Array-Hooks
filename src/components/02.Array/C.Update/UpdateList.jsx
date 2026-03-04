import { useState } from "react";

let initialShapes = [
  { id: 1, type: "Circle", x: 50, y: 100 },
  { id: 2, type: "Square", x: 150, y: 100 },
  { id: 3, type: "Circle", x: 250, y: 100 },
];

const ShapeEditor = () => {
  const [shapes, setShapes] = useState(initialShapes);

  return (
    <>
      <button>Move circles down!</button>
      {shapes.map((s) => (
        <div
          key={s.id}
          style={{
            backgroundColor: "purple",
            position: "absolute",
            left: s.x,
            top: s.y,
            borderRadius: s.type === "Circle" ? "50%" : "",
            width: 20,
            height: 20,
          }}
        />
      ))}
    </>
  );
};

export default ShapeEditor;
