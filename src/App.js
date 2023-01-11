import './styles/app.css';
import Calculator from './components/Calculator.js';

function App() {
  return (
    <>
      <div class="partitionScreen">
        <div class="topLeft"> 1</div>
        <div class="bottomLeft"> 2</div>
        <div class="topMiddle"> 3</div>
        <div class="middleMiddle">
          <Calculator />
        </div>
        <div class="bottomMiddle"> 5</div>
        <div class="topRight"> 6</div>
        <div class="bottomRight"> 7</div>
      </div>
    </>
  );
}

export default App;
