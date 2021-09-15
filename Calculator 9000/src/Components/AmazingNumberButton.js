function AmazingNumberButton (props){
    return(
        <input label="props.label" onClick={props.handleClick} value={props.label} readOnly/>
    )
}

export default AmazingNumberButton;