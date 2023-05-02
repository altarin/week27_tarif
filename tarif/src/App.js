import styles from './App.css';
import React from 'react';
import Tarif from './components/TarifCard';
import Button from './components/Button';

const tars = [
  {unlimited:"300", price: "300", speed: "10", color: 'blue', id: 1, btn_choose: 'Выбрать'},
  {unlimited:"450", price: "450", speed: "50", color: 'green', id: 2, btn_choose: 'Выбрать'},
  // {unlimited:"550", price: "550", speed: "100", color: 'red', id: 3, Button: "Выбрать", isSelected: false},
  // {unlimited:"1000", price: "1000", speed: "200", color: 'black', id: 4, Button: "Выбрать", isSelected: false},
];

  function App() {

  return (
    <div>
      <div className={styles.App}>
      {
          tars.map((tar) =>
            <Tarif unlimited={tar.unlimited} price={tar.price} speed={tar.speed} color={tar.color} btn_choose={tar.btn_choose} isSelected={tar.isSelected}/>
            ) 
      }    
      </div>
    </div>
  );
}

export default App;
