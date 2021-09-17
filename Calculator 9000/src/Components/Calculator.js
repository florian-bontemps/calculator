import '../App.css';
import GreatOperationButton from './GreatOperationButton';
import AmazingNumberButton from './AmazingNumberButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import BeautifullScreen from './BeautifullScreen';
import ItSOverNineThousand from './ItSOverNineThousand';
import {useState} from 'react';
import {evaluate, round, string} from 'mathjs'


function Calculator() {
// States are created here with their starting values as well as the function needed to change them 
  const [answer, setAnswer] = useState("0");
  const [question, setQuestion] = useState("");
  const [over9000, setOver9000] = useState(false);

  const handleClick = (event) => {
// Here I use a function to read the value of the clicked button so it's added to the calculation 
  let value = event.target.value;
    switch(value){
      case "=": {
        
        if (question !== ""){
          let newAnswer = answer;
          // When the button for the sum is clicked, we create a copy of the answer state to change it later, 
          // resolve the calculation if there's one, return it as a string and round up the result if needed. 
          // If the result would be too long and would break out of the screen,
          // An error message appears. Also, we check is the result is superior or not to 9000.
            newAnswer = evaluate(question);
            newAnswer = string(round(newAnswer, 3));           
              if(newAnswer.length <= 12){
                setAnswer(newAnswer);
                if(newAnswer > 9000) {
                  setOver9000(true);
                }else{
                  setOver9000(false);
                  let newQuestion = newAnswer;
                  setQuestion(newQuestion);
                };
              }else{
                newAnswer = "Too long!";
                setAnswer(newAnswer);
                let newQuestion = "Please press DEL";
                setQuestion(newQuestion);
              }; 
         }else{
          let newAnswer = answer;
          newAnswer = "0";
          setAnswer(newAnswer);
          }
        };
      break;
      case "DEL": {
        // If the DEL button is clicked, the calculator resets 
        let newAnswer = answer;
        let newQuestion = question;
        let is9000 = over9000;
        newAnswer = "0";
        setAnswer(newAnswer);
        newQuestion = "";
        setQuestion(newQuestion);
        is9000 = false;
        setOver9000(is9000);
      };
      break;
      default: 
        // Any other button press adds its value to the ongoing calculation 
        let newQuestion = value;
        setQuestion(question + newQuestion);
    }
  } 
  
return (
    <div className="calculationBox">
      {/* Optional box whenever the sums goes over 9000  */}
      {over9000 ? <ItSOverNineThousand /> : <div></div>}
        <div className="fullScreen">
          {/* Passing the current calculation and result to the screen  */}
          <BeautifullScreen answer={answer} question={question} />
        </div>
        <div className="keyboard">
          {/* The pressed buttons are ready to give their label to the handleClick function when called  */}
          <GreatOperationButton label ="+" handleClick={handleClick} />
          <GreatOperationButton label ="-" handleClick={handleClick} />
          <GreatOperationButton label ="*" handleClick={handleClick} />
          <GreatOperationButton label ="/" handleClick={handleClick} />
          <GreatOperationButton label ="(" handleClick={handleClick} />
          <GreatOperationButton label =")" handleClick={handleClick} />
          <GreatOperationButton label ="DEL" handleClick={handleClick} />
          <AmazingNumberButton label =""/>
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