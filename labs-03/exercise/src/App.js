import './App.css';
import Calculator from './components/exercise-01/calculator';
import Random from './components/exercise-03/random';
import CountdownTimer from './components/exercise-02/time';

function App() {
  return (
    <>
      <Calculator/>
      <CountdownTimer/>
      <Random/>
    </>
  );
}

export default App;
