import { useState, useEffect, useParams } from "react";
import axios from "axios";




function View() {

    // const api = `http://localhost:8000/api/users/${id}`;

    // const [first_name, setFName] = useState("");
    // const [last_name, setLName] = useState("");
    // const [email, setEmail] = useState("");
    // const [profile_pic, setImage] = useState("");
    // const [job_title, setJob] = useState("");
    // const [location, setLocation] = useState("");
    // const [avatar, setAvatar] = useState("");

    

    // const fetch = () => {
    //     axios.get(api).then((res) => {
    //         // console.log(res.data.singleUser);
    //         setFName(res.data.singleUser.first_name);
    //         setLName(res.data.singleUser.last_name);
    //         setEmail(res.data.singleUser.email);
    //         setImage(res.data.singleUser.profile_pic);
    //         setJob(res.data.singleUser.job_title);
    //         setLocation(res.data.singleUser.location);
    //         setAvatar(res.data.singleUser.avatar);
    //         // setProject(res.data.singleUser.projects[0])
    //     });
    // };


    // const params = useParams()

    // const id = params.id

    // useEffect(() => {
    //     fetch();
    // }, []);



    return (
        <div>View test to see if it's working</div>
    )
}

export default View