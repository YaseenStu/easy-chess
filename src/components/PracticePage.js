import React, { useEffect, useState } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

const PracticePage = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState('start');

  const onDrop = (sourceSquare, targetSquare) => {
    const move = {
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q' // Always promote to a queen for simplicity
    };

    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(move);
    setGame(gameCopy);

    if (result === null) {
      alert('Invalid move. Please try again.');
    }
  };

  const getStatusText = () => {
    if (game.isCheckmate()) {
      return 'Checkmate!';
    } else if (game.isDraw()) {
      return 'Draw!';
    } else {
      return game.turn() === 'w' ? "White's turn" : "Black's turn";
    }
  };

  return (
    <div>
        <h2 className="text-2xl font-bold mb-4 text-center ">Practice Chess</h2>
    <div className="container mx-auto p-8 flex flex-col items-center justify-center">

      <div className="flex flex-row items-start justify-center">
        <Chessboard
          position={game.fen()}
          onPieceDrop={onDrop}
          boardWidth={500}
          customBoardStyle={{
            borderRadius: '5px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
          }}
        />
        <div className="ml-4 text-lg font-semibold text-center">{getStatusText()}</div>
      </div>
    </div>
    </div>
  );
};

export default PracticePage;
{/* <div className="ml-4">
<div className="text-center text-lg font-semibold mt-4">{getStatusText()}</div> */}