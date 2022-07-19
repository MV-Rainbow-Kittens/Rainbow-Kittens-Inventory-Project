import '../css/Home.css'

const Card = (props) => {
    const user = props.user
    return(
        <div className='card'>
            <div className='cardProfilePicture'>
                <img src={user.profile_pic} />
            </div>
            <div className='usersName'>
                <h2>
                    {user.first_name} {user.last_name}
                </h2>
            </div>
            <div className='usersEmail'>
                <h3>
                    {user.email}
                </h3>
            </div>
        </div>
    )
}

export default Card;