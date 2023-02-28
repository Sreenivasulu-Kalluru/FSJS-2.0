import React from 'react';

const WinsLosses = ({ wins, losses, draws }) => {
  return (
    <div className="wins-losses">
      <div className="wins">
        <span className="number">{wins}</span>
        <span className="text">{wins === 1 ? 'Win' : 'Wins'}</span>
      </div>{' '}
      <div className="draws">
        <span className="number">{draws}</span>
        <span className="text">{draws === 1 ? 'Draw' : 'Draws'}</span>
      </div>
      <div className="losses">
        <span className="number">{losses}</span>
        <span className="text">{losses === 1 ? 'Loss' : 'Losses'}</span>
      </div>
    </div>
  );
};

export default WinsLosses;
