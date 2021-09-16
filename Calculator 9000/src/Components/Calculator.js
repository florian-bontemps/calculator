import '../App.css';
import GreatOperationButton from './GreatOperationButton';
import AmazingNumberButton from './AmazingNumberButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import BeautifullScreen from './BeautifullScreen';
import { useState } from 'react';
import {evaluate, round} from 'mathjs'


function Calculator() {
  const [answer, setAnswer] = useState("0");
  const [question, setQuestion] = useState("");
//   const {over9000, setOver9000} = useState(false);

  const handleClick = (event) => {
  let value = event.target.value;
    switch(value){
      case "=": {
        if (question !== ""){  
          let newAnswer = answer;
          newAnswer = evaluate(question);
          newAnswer = round(newAnswer, 4)
          setAnswer(newAnswer);
          let newQuestion = newAnswer;
          setQuestion(newQuestion);
        }else{
          let newAnswer = answer;
          newAnswer = "NàN";
          setAnswer(newAnswer);
          }
        };
      break;
      default: 
        let newQuestion = value;
        setQuestion(question + newQuestion);
        console.log(question);
    }
  } 
  
return (
    <div className="calculationBox">
        <div className="fullScreen">
          <BeautifullScreen answer={answer} question={question} />
        </div>
        <div className="keyboard">
          <GreatOperationButton label ="+" handleClick={handleClick} />
          <GreatOperationButton label ="-" handleClick={handleClick} />
          <GreatOperationButton label ="*" handleClick={handleClick} />
          <GreatOperationButton label ="/" handleClick={handleClick} />
          <AmazingNumberButton label ="9" handleClick={handleClick}/>
          <AmazingNumberButton label ="8" handleClick={handleClick}/>
          <AmazingNumberButton label ="7" handleClick={handleClick}/>
          <AmazingNumberButton label ="6" handleClick={handleClick}/>
          <AmazingNumberButton label ="5" handleClick={handleClick}/>
          <AmazingNumberButton label ="4" handleClick={handleClick}/>
          <AmazingNumberButton label ="3" handleClick={handleClick}/>
          <AmazingNumberButton label ="2" handleClick={handleClick}/>
          <AmazingNumberButton label ="1" handleClick={handleClick}/>
          <AmazingNumberButton label ="." handleClick={handleClick}/>
          <AmazingNumberButton label ="0" handleClick={handleClick}/>
          <MagnificientEqualButton label ="=" handleClick={handleClick}/>
        </div>
    </div>
  )
}
export default Calculator;