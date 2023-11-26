import "./Minesweeper.css";
import React, { useState, useEffect } from "react";

const ROWS = 8;
const COLS = 8;
const MINES = 10;

const generateEmptyGrid = () => {
  return Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({
      isMine: false,
      revealed: false,
      value: 0,
    }))
  );
};

const placeMines = (grid) => {
  let minesPlaced = 0;
  while (minesPlaced < MINES) {
    const row = Math.floor(Math.random() * ROWS);
    const col = Math.floor(Math.random() * COLS);
    if (!grid[row][col].isMine) {
      grid[row][col].isMine = true;
      minesPlaced++;
    }
  }
};

const countNeighborMines = (grid, row, col) => {
  const neighbors = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let count = 0;

  neighbors.forEach(([dx, dy]) => {
    const newRow = row + dx;
    const newCol = col + dy;

    if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS) {
      if (grid[newRow][newCol].isMine) {
        count++;
      }
    }
  });

  return count;
};

const updateNeighborValues = (grid) => {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (!grid[row][col].isMine) {
        grid[row][col].value = countNeighborMines(grid, row, col);
      }
    }
  }
};

const Minesweeper = () => {
  const [grid, setGrid] = useState(generateEmptyGrid());
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    resetGame();
  }, []); // Run only once on mount

  const resetGame = () => {
    const newGrid = generateEmptyGrid();
    placeMines(newGrid);
    updateNeighborValues(newGrid);
    setGrid(newGrid);
    setGameOver(false);
    setGameWon(false);
  };

  const handleCellClick = (row, col) => {
    if (gameOver || gameWon) return;

    if (grid[row][col].isMine) {
      // Handle game over logic
      setGameOver(true);
    } else {
      // Reveal the clicked cell
      grid[row][col].revealed = true;
      setGrid([...grid]); // Force a re-render after updating cell state

      // Check for game win
      const unrevealedCells = grid
        .flat()
        .filter((cell) => !cell.isMine && !cell.revealed);
      if (unrevealedCells.length === 0) {
        setGameWon(true);
      }
    }
  };

  const handleResetGame = () => {
    resetGame();
  };

  const renderGrid = () => {
    return grid.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, colIndex) => (
          <div
            key={colIndex}
            className={`cell ${cell.revealed ? "revealed" : ""} ${
              cell.isMine && gameOver ? "mine" : ""
            }`}
            onClick={() => handleCellClick(rowIndex, colIndex)}
          >
            {cell.revealed && (cell.isMine ? "💣" : cell.value)}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="Mine-container">
      <div className="minesweeper">
        <h1>Minesweeper</h1>
        {renderGrid()}
        {gameOver && (
          <div className="game-over-popup">
            <p>Game Over! You clicked on a mine.</p>
            <button onClick={handleResetGame}>Reset Game</button>
          </div>
        )}
        {gameWon && (
          <div className="game-over-popup">
            <p>Congratulations! You cleared the game!</p>
            <button onClick={handleResetGame}>Play Again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Minesweeper;
