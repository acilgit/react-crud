/**
 * Created by 18953 on 2017/5/17.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function GameCard({game}) {
    return (
        <div className="ui card">
            <div className="image crop-img">
                 <img style={ {height: "100%", width: "100%"}}
                     src={game.cover} alt="游戏封面ss"
                     className="ui small cover bordered"/>
            </div>

            <div className="content">
                <div className="header">{game.title}</div>
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <Link to={`/game/${game._id}`} className="ui basic button blue animated fade">
                        <div className="hidden content">编辑1</div>
                        <div className="visible content"><i className="icon write"></i></div>
                    </Link>
                    <Link to={`/game/${game._id}`} className="ui basic button red animated fade">
                        <div className="hidden content">删除</div>
                        <div className="visible content"><i className="icon trash outline"></i></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

GameCard.propTypes = {
    game: PropTypes.object.isRequired
};

export default GameCard