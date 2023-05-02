import './Button.scss';
// import Tarif from './TarifCard';


import React, { useState } from 'react';

export default function Button(props) {
    const [pressed, setPressed] = useState(false);
    const [showBorder, setShowBorder] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
        setShowBorder(true);
    };

    return (
        <div className={`card ${setShowBorder ? 'tarif-card' : ""} `}>
            <button onClick={handleChange}>Выбрать</button>
        </div >
    );

}
// style = {{ borderColor: pressed ? "red" : "blue" }}