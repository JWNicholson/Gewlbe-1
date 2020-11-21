const InfoAlert = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Location Info</h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>Name: <strong>{ info.title }</strong></li>
            </ul>
            
        </div>
    )
}

export default InfoAlert
