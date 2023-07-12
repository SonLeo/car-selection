import { useState } from 'react';
import './App.css';

function App() {
  const carList = ['EQS Sedan', 'A-Class Sedan', 'C-Class Sedan', 'E-Class Sedan', 'S-Class Sedan Long', 'Mercedes-Maybach S-Class Sedan', 'GLA', 'GLB', 'GLC', 'GLC', '123', 'GLC Coupé', 'GLE', 'GLE Coupé', 'GLS', 'G-Class SUV'];
  const colorList = ['Đen Obsidian (197)', 'Đen Onyx (346)', 'Xanh Nautic (595)', 'Đỏ Rubellite (660)', 'Xám Graphite (831)', 'Bạc Mojave (859)', 'Bạc High-tech (922)', 'Xanh Emerald (989)'];

  const [selectedCar, setSelectedCar] = useState({
    car: carList[0],
    color: colorList[0]
  });

  const choiceCar = (e) => {
    setSelectedCar((previousState) => ({
      ...previousState,
      car: e.target.value
    }));
  };

  const choiceColor = (e) => {
    setSelectedCar((previousState) => ({
      ...previousState,
      color: e.target.value
    }));
  };

  return (
    <div>
      <h1>Select your car:</h1>
      <div>
        <label>Select a car: </label>
        <select value={selectedCar.car} onChange={choiceCar}>
          {carList.map((car, index) => (
            <option key={index} value={car}>{car}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Select a color: </label>
        <select value={selectedCar.color} onChange={choiceColor}>
          {colorList.map((color, index) => (
            <option key={index} value={color}>{color}</option>
          ))}
        </select>
      </div>
      <div>
        <h3>You selected a {selectedCar.color} - {selectedCar.car}</h3>
      </div>
    </div>
  );
}

export default App;