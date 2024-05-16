import React, { useState, useContext } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { ThemeContext } from './ThemeContext';

const PracticePage = () => {
  const { theme } = useContext(ThemeContext);
  const [game, setGame] = useState(new Chess());
  const [moveHistory, setMoveHistory] = useState([]);

  const onDrop = (sourceSquare, targetSquare) => {
    const move = {
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q'
    };

    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(move);
    setGame(gameCopy);
    //
    setMoveHistory(prevHistory => [...prevHistory, move]);

    if (result === null) {
      alert('Invalid move. Please try again.');
    }
  };
  const resetGame = () => {
    setGame(new Chess());
    setMoveHistory([]);
  };

  const undoMove = () => {
    if (moveHistory.length > 0) {
      const updatedHistory = moveHistory.slice(0, -1);
      setMoveHistory(updatedHistory);

      const newGame = new Chess();
      updatedHistory.forEach(move => {
        newGame.move(move);
      });

      setGame(newGame);
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
      <h2 className={`text-2xl font-bold mb-4 text-center ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>Practice</h2>
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
          <div className="flex">
            <div className="ml-2 ">
              <div className={` text-lg font-semibold ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>{getStatusText()}
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-full transition duration-300 ease-in-out mb-4" onClick={resetGame}>
                Reset
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-full transition duration-300 ease-in-out mb-4" onClick={undoMove} disabled={moveHistory.length === 0}>
                Undo
              </button>
            </div>

          </div>


        </div>

      </div>

    </div>
  );
};

export default PracticePage;