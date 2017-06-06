import React from 'react';
import PropTypes from 'prop-types';

const Header = ({toggleMode, restart}) => (
    <div className="header clearfix">
        <nav>
            <ul className="nav nav-pills pull-right">
                <li><a href="#" onClick={toggleMode}>Mode Change</a></li>
                <li><a href="#" onClick={restart}>Restart</a></li>
            </ul>
        </nav>
        <h3>Rock Paper Scissors</h3>
    </div>
);

Header.propTypes = {
    toggleMode: PropTypes.func.isRequired
};

export default Header;
