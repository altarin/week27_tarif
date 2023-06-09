import React from 'react';
import Button from './Button';
import './TarifCard.scss';
import './Button.scss';

import './themes/blue.scss';
import './themes/green.scss';
import './themes/red.scss';
import './themes/black.scss';

function getThemeFile(color) {
    switch (color) {
        case 'blue':
            return 'blue-card';
        case 'green':
            return 'green-card';
        case 'red':
            return 'red-card';
        case 'black':
            return 'black-card';
        default:
            return '';
    }
}

class Tarif extends React.Component {
    state = {
        showBorder: false
    }

    handleClick = () => {
        this.setState(prevState => ({ showBorder: !prevState.showBorder }));
    }

    render() {

        const { unlimited, price, speed, color, isSelected } = this.props;
        const theme = getThemeFile(color);

        let classTar = "";
        if (isSelected) classTar = "selected";

        return (
            <div className={`tarif-card ${theme} ${classTar}`} style={{ border: this.state.showBorder ? '2px solid blue' : 'none' }}>
                <div className="unlimited">Безлимитный {unlimited}</div>
                <div className="price">руб {price} /мес</div>
                <div className="speed">до {speed} Мбит/сек</div>
                <div className="volume">Объем включенного трафика не ограничен</div>
                <Button isSelected={isSelected} onClick={this.handleClick}></Button>
            </div >
        );
    }
}
export default Tarif;