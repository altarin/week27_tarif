import styles from './App.css';
import React from 'react';
import Tarif from './components/TarifCard';

const tars = [
  {unlimited:"300", price: "300", speed: "10", color: 'blue', id: 1},
  {unlimited:"450", price: "450", speed: "50", color: 'green', id: 2},
  {unlimited:"550", price: "550", speed: "100", color: 'red', id: 3, isSelected: true},
  {unlimited:"1000", price: "1000", speed: "200", color: 'black', id: 4},
];

  function App() {
  return (
    <div>
    <div className={styles.App}>
      {
          tars.map((tar) =>
            <Tarif unlimited={tar.unlimited} price={tar.price} speed={tar.speed} color={tar.color} isSelected={tar.isSelected}/>
          )
      }
    </div>
    </div>
  );
}

export default App;
