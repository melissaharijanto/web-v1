const WebsiteButton = ({link}) => {

    const onClick = () => {
        window.open(link);
    }

    return (
        <button className="website-button" id="website-button" onClick={onClick}>
            <text>project web</text>
        </button>
    )
}

export default WebsiteButton;