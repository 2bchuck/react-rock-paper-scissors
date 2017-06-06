import React from 'react';

import Header from './Header';
import Scores from './Scores';
import Modes from './Modes';
import History from './History';

const modes = {
    pvc: {
        mode: 'pvc',
        label: 'Player Vs Computer',
        player1Label: 'Player',
        player2Label: 'Computer',
    },
    cvc: {
        mode: 'cvc',
        label: 'Computer Vs Computer',
        player1Label: 'Computer 1',
        player2Label: 'Computer 2',
    }
};

const weapons = {
    rock: {
        wins: ['scissors'],
    },
    paper: {
        wins: ['rock'],
    },
    scissors: {
        wins: ['paper'],
    }
};

const modeKeys = Object.keys(modes);
const weaponKeys = Object.keys(weapons);

export const getRandomWeapon = () => {
    return weaponKeys[ Math.floor(3 * Math.random()) ];
};

export const getWinner = (weapon1, weapon2) => {
    if (weapon1 === weapon2) {
        return 0;
    }
    return weapons[weapon1].wins.some(wins => wins === weapon2) ? 1 : 2;
};

const initialState = {
    mode: modeKeys[0],
    games: []
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = initialState;

        this.toggleMode = this.toggleMode.bind(this);
        this.fight = this.fight.bind(this);
        this.restart = this.restart.bind(this);
    }

    restart() {
        this.setState({
            mode: modeKeys[0],
            games: []
        });
    }

    /**
     * Toggle mode between player vs computer & computer vs computer
     */
    toggleMode() {
        const mode = this.state.mode;
        this.setState({
            mode: mode === modeKeys[0] ? modeKeys[1] : modeKeys[0],
            games: []
        });
    }

    fight(weapon) {
        const weapon1 = weapon || getRandomWeapon();
        const weapon2 = getRandomWeapon();
        const winner = getWinner(weapon1, weapon2);
        const game = {weapon1, weapon2, winner};
        const { games } = this.state;

        games.push(game);

        this.setState({
            games
        });
    }

    render() {
        let { mode, label, player1Label, player2Label } = modes[this.state.mode];

        return (
            <div className="container">
                <Header
                    toggleMode={this.toggleMode}
                    restart={this.restart} />
                <Scores
                    mode={mode}
                    games={this.state.games} />
                <Modes
                    mode={mode}
                    label={label}
                    player1Label={player1Label}
                    player2Label={player2Label}
                    onClickWeapon={this.fight} />
                <History
                    mode={mode}
                    games={this.state.games} />
                <footer className="footer">
                    <p>&copy; 2017 Legal One, GmbH.</p>
                </footer>
            </div>
        );
    }
}

export default App;
