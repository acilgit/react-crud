/**
 * Created by XY on 2017-05-15.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default function GamesList({list}) {
    const emptyMessage = (
        <p>There are no games yet in your collection1.</p>
    );
    const gameList = (
        list.map((game) => {
            return (<h3>{game.title}</h3>)
        })
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