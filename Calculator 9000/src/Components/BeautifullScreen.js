import '../App.css';

function BeautifullScreen(props) {
  return (
    <div className="fullScreen">
        <div className="answerField calculating">{props.answer}</div>
        <div className="questionField calculating">{props.question}</div>
    </div>
    
  );
}

export default BeautifullScreen;