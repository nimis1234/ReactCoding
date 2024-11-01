import { useState } from "react";
import "./App.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("black"); //use state here changes color
  function ChangeBgColor(color) {
    setSelectedColor(color);
  }
  return (
    <>
      <div
        className="min-h-screen max-w-7xl mx-auto bg-gray-100 flex items-end justify-center"
        style={{ backgroundColor: selectedColor }}
      >
        <div className="h-96 flex flex-col justify-between">
          <div className="flex justify-center mt-auto space-x-4">
            <button
              className="rounded-e-md bg-red-500 text-white p-4"
              onClick={() => ChangeBgColor("red")}
            >
              Button 1
            </button>
            <button
              className="rounded-e-md bg-green-500 text-white p-4"
              onClick={() => ChangeBgColor("green")}
            >
              Button 2
            </button>
            <button
              className="rounded-e-md bg-yellow-500 text-white p-4"
              onClick={() => ChangeBgColor("yellow")}
            >
              Button 3
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
