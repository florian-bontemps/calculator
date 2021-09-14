import '../App.css';
import GreatOperationButton from './GreatOperationButton';
import AmazingNumberButton from './AmazingNumberButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import BeautifullScreen from './BeautifullScreen';

function Calculator() {
  return (
    <div className="calculationBox">
        <BeautifullScreen />
        <AmazingNumberButton />
        <GreatOperationButton />
        <MagnificientEqualButton />
    </div>
  );
}

export default Calculator;