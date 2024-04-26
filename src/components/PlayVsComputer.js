import React, { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

const difficultyLevels = {
  'Easy': { depth: 2, randomness: 0.5 },
  'Medium': { depth: 3, randomness: 0.2 },
  'Hard': { depth: 4, randomness: 0 }
};

const PlayVsComputer = () => {
  const [game, setGame] = useState(new Chess());
  const [selectedDifficulty, setSelectedDifficulty] = useState('Medium');

  useEffect(() => {
    const makeAIMove = () => {
      if (game.turn() === 'b' && !game.isCheckmate() && !game.isDraw()) {
        const { depth, randomness } = difficultyLevels[selectedDifficulty];
        const bestMove = getBestMove(game, depth, true, randomness);
        if (bestMove) {
          game.move(bestMove);
          setGame(new Chess(game.fen()));
        }
        else
        {
          alert("Game Over")
        }
      }
     
    };

    setTimeout(makeAIMove, 500);
  }, [game, selectedDifficulty]);

  const getBestMove = (game, depth, maximizingPlayer, randomness) => {
    const moves = game.moves();
    let bestMove = null;
    let bestValue = maximizingPlayer ? -Infinity : Infinity;

    const randomizedMoves = moves.sort(() => Math.random() - randomness);

    for (const move of randomizedMoves) {
      const newGame = new Chess(game.fen());
      newGame.move(move);
      const value = minimax(newGame, depth - 1, -Infinity, Infinity, !maximizingPlayer);

      if ((maximizingPlayer && value > bestValue) || (!maximizingPlayer && value < bestValue)) {
        bestValue = value;
        bestMove = move;
      }
    }

    return bestMove;
  };

  const minimax = (game, depth, alpha, beta, maximizingPlayer) => {
    if (depth === 0 || game.isCheckmate() || game.isDraw()) {
      return evaluateBoard(game);
    }

    let bestValue = maximizingPlayer ? -Infinity : Infinity;
    const moves = game.moves();

    for (const move of moves) {
      const newGame = new Chess(game.fen());
      newGame.move(move);
      const value = minimax(newGame, depth - 1, alpha, beta, !maximizingPlayer);

      if (maximizingPlayer) {
        bestValue = Math.max(bestValue, value);
        alpha = Math.max(alpha, value);
      } else {
        bestValue = Math.min(bestValue, value);
        beta = Math.min(beta, value);
      }

      if (beta <= alpha) {
        break;
      }
    }

    return bestValue;
  };

  const evaluateBoard = (game) => {
    const board = game.board();
    let totalEvaluation = 0;

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = board[row][col];
        if (piece) {
          const value = getPieceValue(piece);
          totalEvaluation += value;
        }
      }
    }

    return totalEvaluation;
  };

  const getPieceValue = (piece) => {
    const pieceValues = {
      'p': 1,
      'n': 3,
      'b': 3,
      'r': 5,
      'q': 9,
      'k': 10
    };

    const value = pieceValues[piece.type];
    return piece.color === 'w' ? value : -value;
  };

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

  const resetGame = () => {
    setGame(new Chess());
  };

  const handleDifficultyChange = (e) => {
    setSelectedDifficulty(e.target.value);
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
      <h2 className="text-2xl font-bold mb-4 text-center ">Chess Against AI</h2>
    <div className="container mx-auto p-8 flex flex-col items-center justify-center">

      <div className="flex items-center">
        <Chessboard
          position={game.fen()}
          onPieceDrop={onDrop}
          boardWidth={500}
          // customDarkSquareStyle={{ backgroundColor: '#779952' }}
          // customLightSquareStyle={{ backgroundColor: '#edeed1' }}
          customBoardStyle={{
            borderRadius: '5px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
          }}
        />
        <div className="ml-4">
        <div className="text-lg font-semibold mb-2">{getStatusText()}</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2" onClick={resetGame}>
            Reset
          </button>
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">Difficulty:</label>
            <select
              value={selectedDifficulty}
              onChange={handleDifficultyChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {Object.keys(difficultyLevels).map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PlayVsComputer;