function GreatOperationButton (props){
    return(
        <input label="props.label" value={props.label} readOnly onClick={props.handleClick}/>
    )
}

export default GreatOperationButton;