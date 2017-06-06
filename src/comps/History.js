import React from 'react';
import PropTypes from 'prop-types';

class History extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let player1 = '',
            player2 = '';

        if (this.props.mode === 'pvc') {
            player1 = 'Player';
            player2 = 'Computer';
        } else {
            player1 = 'Computer1';
            player2 = 'Computer2';
        }

        const games = this.props.games.map((game, i) => {
            let winner;
            if (game.winner === 1) {
                winner = `${player1} Win`;
            } else if (game.winner === 2) {
                winner = `${player2} Win`;
            } else {
                winner = 'Draw';
            }

            return (
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{game.weapon1}</td>
                    <td>{game.weapon2}</td>
                    <td>{winner}</td>
                </tr>
            )
        }).reverse();

        return (
            <div className="row">
                <div className="col-sm-12">
                <table className="table table-striped">
                <thead>
                <tr>
                <th>Match #</th>
                <th>{player1} Input</th>
                <th>{player2} Input</th>
                <th>Result</th>
                </tr>
                </thead>
                <tbody>
                {games}
                </tbody>
                </table>
                </div>
            </div>
        );
    }
}

History.propTypes = {
    mode: PropTypes.string.isRequired,
    games: PropTypes.array.isRequired
};

export default History;
