function MagnificientEqualButton (props){
    return(
        <input className="sum" label="props.label" value={props.label} readOnly onClick={props.handleClick} />
    )
}

export default MagnificientEqualButton;