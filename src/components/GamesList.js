/**
 * Created by XY on 2017-05-15.
 */
import React from 'react';
import PropTypes from 'prop-types';

import GameCard from './GameCard';

export default function GamesList({list}) {
    const emptyMessage = (
        <p>There are no games yet in your collection1.</p>
    );
    const gameList = (
        <div className="ui four cards">
            {list.map((game, index) => (
            <GameCard game={game} key={game._id}/>
            ))}
        </div>
    );
    return (
        <div>
            {list && list.length > 0 ? gameList : emptyMessage}
        </div>
    )
}

GamesList.propTypes = {
    list: PropTypes.array.isRequired
};