import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ds.css';

const generatenew = () => {
  window.location.reload();
  generateRandomBoard();
}
const generateRandomBoard = () => {
  const board = Array(9).fill(0).map(() => Array(9).fill(0));
  fillRandomCells(board, 20); // Fills 20 cells randomly. Adjust this number as needed.
  return board;
};

const fillRandomCells = (board, numberOfCells) => {
  let filled = 0;
  while (filled < numberOfCells) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    if (board[row][col] === 0) {
      const num = Math.floor(Math.random() * 9) + 1;
      if (isSafe(board, row, col, num)) {
        board[row][col] = num;
        filled++;
      }
    }
  }
};

const isSafe = (board, row, col, num) => {
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num || board[x][col] === num || board[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + x % 3] === num) {
      return false;
    }
  }
  return true;
};

const solveSudoku = (board) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isSafe(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) {
              return true;
            } else {
              board[row][col] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
};

const BacktrackingPage = () => {
  const [board, setBoard] = useState(generateRandomBoard());
  const [showCode, setShowCode] = useState(false);

  const handleSolve = () => {
    const newBoard = JSON.parse(JSON.stringify(board));
    solveSudoku(newBoard);
    setBoard(newBoard);
    setShowCode(true);
  };

  const printsudokucode = () => {
    return `
    void solveSudoku(vector<vector<char>>& board) {
        solve(board);
    }

    bool solve(vector<vector<char>>& board){
        for(int i=0; i<9; i++){
            for(int j=0; j<9; j++){
                if(board[i][j]=='.'){
                    for(char c='1'; c<='9'; c++){
                        if (isvalid(board, i, j, c)) {
                            board[i][j] = c;
                        
                            if(solve(board)){
                                return true;
                            }
                            else{
                            board[i][j]='';
                        }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    bool isvalid(vector<vector<char>> &board, int row, int col, char c){
        for(int i=0; i<9; i++){
            if(board[i][col]==c){
                return false;
            }
            if(board[row][i]==c){
                return false;
            }
            if(board[3*(row/3)+i/3][3*(col/3)+i%3]==c){
                return false;
            }
        }
        return true;
    }

          `;
  };

  return (
    <div>
      <div className="navbar1">
        <Link to="/">HOME</Link>
        <Link to="/arrays">Arrays</Link>
        <Link to="/trees">Trees</Link>
        <Link to="/graphs">Graphs</Link>
        <Link to="/backtracking">Backtracking</Link>
      </div>
      <div className="container">
        <div className="name">
          <h1>Backtracking Based Real Life Applications</h1>
        </div>
        <div className="choose">
          <h2>Choose an application to visualize</h2>
        </div>
        <div className="sudoku-container">
          <h2>Sudoku Solver</h2>
          <table className="sudoku-board">
            <tbody>
              {board.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell !== 0 ? cell : ''}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button id="bubble_button" onClick={generatenew}>Generate New Board</button>
          <button id="bubble_button" onClick={handleSolve}>Solve Sudoku</button>
        </div>
        {showCode && (
          <div className="code_snippet">
            <h3> Backtracking Code for Sudoku Solver</h3>
            <pre className="code">{printsudokucode()}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default BacktrackingPage;
