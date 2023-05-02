import React from 'react';
import './Button.scss';

export default function Button(props) {
    const [isSelected, setIsSelected] = React.useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
        props.onClick();
    };

    return (
        <button onClick={handleClick}>{isSelected ? 'Выбран' : 'Выбрать'}</button>
    );
}