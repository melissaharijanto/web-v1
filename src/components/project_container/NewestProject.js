const NewestProject = ({image, newestProjectFunction}) => {
    return (
    <div>
        <button onClick={newestProjectFunction} className="transparent-button">
            <img src={image} className="newest-project"></img>
        </button>
    </div>
    );
}

export default NewestProject;