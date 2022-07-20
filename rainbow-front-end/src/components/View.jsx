import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../css/View.css'
import axios from "axios";





function View() {

    const params = useParams();

    const id = params.id;

    const navigate = useNavigate()

    console.log(id);

    const api = `http://localhost:8000/api/users/${id}`;

    const [first_name, setFName] = useState("");
    const [last_name, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [profile_pic, setImage] = useState("");
    const [job_title, setJob] = useState("");
    const [location, setLocation] = useState("");
    const [avatar, setAvatar] = useState("");



    const fetch = () => {
        axios.get(api).then((res) => {
            // console.log(res.data.singleUser);
            setFName(res.data.singleUser.first_name);
            setLName(res.data.singleUser.last_name);
            setEmail(res.data.singleUser.email);
            setImage(res.data.singleUser.profile_pic);
            setJob(res.data.singleUser.job_title);
            setLocation(res.data.singleUser.location);
            setAvatar(res.data.singleUser.avatar);
            // setProject(res.data.singleUser.projects[0])
        });
    };




    useEffect(() => {
        fetch();
    }, []);



    return (
        <div>
            <div className="xView">
                <div>
                    <img src={avatar} alt="" className="avatar" />
                </div>
                <h1 onClick={() => navigate("/")} id="xAdmin" >
                    <strong>X</strong>
                </h1>
            </div>
            <div>
                <div className="job">
                    <strong><h1>{job_title}</h1></strong>
                </div>
                <div className="viewClass">
                    <div className="vImgDiv">
                        <img src={profile_pic} alt='#' className="vImg" />
                    </div>
                    <div>
                        <div className="dataCl">
                            <p className="pTag">First Name : </p>
                            <h1 className="hTag">{first_name}</h1>
                        </div>
                        <div className="dataCl">
                            <p className="pTag">Last Name : </p>
                            <h1 className="hTag">{last_name}</h1>
                        </div>
                        <div className="dataCl">
                            <p className="pTag">Email : </p>
                            <h1 className="hTag">{email}</h1>
                        </div>
                        <div className="dataCl">
                            <p className="pTag"> Location : </p>
                            <h1 className="hTag">{location}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View