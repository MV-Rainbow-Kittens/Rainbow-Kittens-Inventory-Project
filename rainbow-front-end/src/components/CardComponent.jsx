import '../css/Home.css'
import { useNavigate } from "react-router-dom";

const Card = (props) => {

    const navigate = useNavigate()

    const user = props.user
    return(
        <div className='card' onClick={() => navigate(`/view/${user.id}`)} id={user.first_name}>
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