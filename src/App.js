import React from 'react';
import './App.css';

function App() {
  return (
    <div id="app">
      <div>
        {Array(30).fill(null).map((_, index) => (
          <img key={index} src="images/heart.png" className="heart" alt="heart" />
        ))}
      </div>

      <div className="main">
        <img src="images/daisy.png" alt="daisy" />
        <h1>Happy Birthday, Jesco!</h1>
        <img src="images/daisy.png" alt="daisy" />
      </div>

      <div className="question">
        <p>Go on a date with me?</p>
      </div>

      <div>
        {Array(30).fill(null).map((_, index) => (
          <img key={index} src="images/heart.png" className="heart" alt="heart" />
        ))}
      </div>

      <div className="instructions">
        <h2>Send me a Message</h2>
        <p>Where you want to eat:</p>
        <p>When you wanna go:</p>
        <p>Anything special you want to do?</p>
        <p>You prolly gonna drive tho 😂</p>
        <img src="images/heart.png" className="heart2" alt="heart" />
      </div>
    </div>
  );
}

export default App;