function MagnificientEqualButton (props){
    return(
        <input label="props.label" value={props.label} readOnly onClick={props.handleClick}/>
    )
}

export default MagnificientEqualButton;