import React from 'react';
import PropTypes from 'prop-types';

class Scores extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let message = '',
            alertClass = '',
            player1 = '',
            player2 = '';

        if (this.props.mode === 'pvc') {
            player1 = 'You';
            player2 = 'Computer';
        } else {
            player1 = 'Computer1';
            player2 = 'Computer2';
        }

        const stats = this.props.games.reduce((stats, game) => {
            if (game.winner === 1) {
                message = `${player1} Won: ${game.weapon1} beat ${game.weapon2}!`;
                alertClass = 'won';
                stats.won++;
            } else if (game.winner === 2) {
                message = `${player1} Lost: ${game.weapon2} beat ${game.weapon1}!`;
                alertClass = 'lost';
                stats.lost++;
            } else {
                message = 'Draw: Play Again!';
                alertClass = '';
                stats.tie++;
            }
            return stats;
        }, {won:0, lost: 0, tie: 0});

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className={alertClass}><span><strong>{message}</strong></span></h4>
                    </div>
                    <div className="col-sm-2 text-right">
                        <h4>Won: <span><strong>{stats.won}</strong></span></h4>
                    </div>
                    <div className="col-sm-2 text-right">
                        <h4>Lost: <span><strong>{stats.lost}</strong></span></h4>
                    </div>
                    <div className="col-sm-2 text-right">
                        <h4>Draw: <span><strong>{stats.tie}</strong></span></h4>
                    </div>
                </div>
            </div>
        );
    }
}

Scores.propTypes = {
    mode: PropTypes.string.isRequired,
    games: PropTypes.array.isRequired
};

export default Scores;
