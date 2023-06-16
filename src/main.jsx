import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

    function Square(props){
        return(
            <button className="square" 
              onClick={props.onClick}>
              {props.value}
            </button>
          )
        }
  
  
    function Board() {
      const [squares, setSquares] = React.useState(Array(9).fill(null));
      const [proX, setProX] = React.useState(true);
    
      const handleClick = (i) => {
        const squaresCopy = squares.slice();
        if (calculatevencedor(squares) || squares[i]) {
          return;
        }
        squaresCopy[i] = proX ? 'x' : 'o';
        setSquares(squaresCopy);
        setProX(!proX);
      };
    
      const renderSquare = (i) => {
        return <
          Square value={squares[i]} 
          Square onClick={() => handleClick(i)} />;
      };
      

      const vencedor = calculatevencedor(squares);
      let status;
      if (vencedor) {
        status = 'Parabéns o vencedor é: ' + vencedor;
      } else {
        status = 'Next player: ' + (proX ? 'X' : 'O');
      }
     
    
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      );
    }
    
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  function calculatevencedor(squaresCopy) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squaresCopy[a] && squaresCopy[a] === squaresCopy[b] && squaresCopy[a] === squaresCopy[c]) {
        return squaresCopy[a];
      }
    }
    return null;
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  