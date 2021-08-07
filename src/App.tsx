import React, { useState } from 'react';
import './App.css';
import Canvas from './Classes/Canvas';
import Circle from './Classes/Circle';

function App() {

  const [circles, setCircles] = useState<Circle[]>([]);

  const [circleParams, setCircleParams] = useState({
    size: 5,
    startAngle: 5,
    angularSpeed: 5
  });

  return (
    <div className="App">
      <div className="Toolbar">
        <button>Draw</button>
        <div className="Add-Circle">
          <input type="number" value={circleParams.size} onChange={e => setCircleParams({...circleParams, size: parseFloat(e.target.value)})}></input>
          <input type="number" value={circleParams.startAngle} onChange={e => setCircleParams({...circleParams, startAngle: parseFloat(e.target.value)})}></input>
          <input type="number" value={circleParams.angularSpeed} onChange={e => setCircleParams({...circleParams, angularSpeed: parseFloat(e.target.value)})}></input>
          <button onClick={() => {
            setCircles([...circles, new Circle(circleParams.size, circleParams.startAngle, circleParams.angularSpeed)]);
          }}>Add circle</button>
        </div>
      </div>

      <div className="Circles">
        {circles.map(circle => 
          <div className="Circle-Object">
            <input type="number" value={circle.size} onChange={(e) => circle.size = parseFloat(e.target.value)}></input>
            <input type="number" value={circle.startAngle} onChange={(e) => circle.startAngle = parseFloat(e.target.value)}></input>
            <input type="number" value={circle.angularSpeed} onChange={(e) => circle.angularSpeed = parseFloat(e.target.value)}></input>
          </div>
        )}
      </div>

      <Canvas circles={circles} />
    </div>
  );
}

export default App;
