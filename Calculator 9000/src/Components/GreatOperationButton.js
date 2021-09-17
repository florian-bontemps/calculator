function GreatOperationButton (props){
    return(
        <input className="operator" label="props.label" value={props.label} readOnly onClick={props.handleClick}/>
    )
}

export default GreatOperationButton;