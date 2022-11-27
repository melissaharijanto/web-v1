const GetButton = ({link}) => {

    const onClick = () => {
        window.open(link);
    }
    
    return (
        <button className="get-button" onClick={onClick}>
            <text>get</text>
        </button>
    )
}

export default GetButton;