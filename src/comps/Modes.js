import React from 'react';
import PropTypes from 'prop-types';

const Modes = ({mode, label, player1Label, player2Label, onClickWeapon}) => (
    <div className="container text-center">
        <h1>{label}</h1>
        {
            mode === 'pvc' ?
            <p>
                <button type="button" className="btn btn-lg btn-primary" onClick={() => onClickWeapon('rock')}>Rock</button>{' '}
                <button type="button" className="btn btn-lg btn-primary" onClick={() => onClickWeapon('paper')}>Paper</button>{' '}
                <button type="button" className="btn btn-lg btn-primary" onClick={() => onClickWeapon('scissors')}>Scissors</button>
            </p> :
            <p>
                <button type="button" className="btn btn-lg btn-primary" onClick={() => onClickWeapon()}>Simulate</button>
            </p>
        }
    </div>
);

Modes.propTypes = {
    mode: PropTypes.string.isRequired,
    lable: PropTypes.string,
    player1Label: PropTypes.string,
    player2Label: PropTypes.string,
    onClickWeapon: PropTypes.func.isRequired
};

export default Modes;
