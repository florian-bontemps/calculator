function AmazingNumberButton (props){
    return(
        <input className="number" label="props.label" onClick={props.handleClick} value={props.label} readOnly/>
    )
}

export default AmazingNumberButton;