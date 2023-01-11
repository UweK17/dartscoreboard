import './styles/app.css';
import Calculator from './components/Calculator.js';

function App() {
  return (
    <>
      <div className="partitionScreen">
        <div className="topLeft player1">Player 1
          <div className="player1score">501</div>
        </div>
        <div className="bottomLeft player2">Player 2
          <div className="player2score">501</div>
        </div>
        <div className="topMiddle"> 3</div>
        <div className="middleMiddle">
          <Calculator />
        </div>
        <div className="bottomMiddle"> 5</div>
        <div className="topRight player3">Player 3
          <div className="player3score">501</div>  
        </div>
        <div className="bottomRight player4">Player 4
          <div className="player4score">501</div>
        </div>
      </div>
    </>
  );
}

export default App;
