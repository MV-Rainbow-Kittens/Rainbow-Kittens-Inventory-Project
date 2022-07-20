import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Update.css";



function Add () {

    const navigate = useNavigate()

    // const url = "http://localhost:8000/api/products/create";

    //States
    const [first_name, setFName] = useState("");
    const [last_name, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [profile_pic, setImage] = useState("");
    const [job_title, setJob] = useState("");
    const [location, setLocation] = useState("");
    const [avatar, setAvatar] = useState("");
    const [password, setPassword] = useState("");
    const [projects, setProject] = useState("");

    // const [id , setId] = useState("")


    const handleSubmit = () => {
        const upUrl = `http://localhost:8000/api/users/create`;
        const data = { first_name, profile_pic, last_name, email, job_title, location, avatar,password,projects }

        axios.post(upUrl, data)
            .then((res) => {
                // });
            })
            navigate("/admin");
    }

    useEffect(() => {
        // fetch()
    }, [])


    return (
        <div className='bodyUp'>
            <div className='containerUp'>
                <h1 className='titleUp'>Add</h1>
                <form onSubmit={handleSubmit}>
                    <div className='user-details-update'>
                        <div className='input-box-update'>
                            <label className='detailsUp' id='idUp'>Id</label>
                            <input type="text" readOnly  />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>First Name</label>
                            <input type="text" value={first_name} onChange={(e) => { setFName(e.target.value) }} />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Last Name</label>
                            <input type="text" value={last_name} onChange={(e) => { setLName(e.target.value) }} />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Email</label>
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Picture</label>
                            <input type="text" value={profile_pic} onChange={(e) => { setImage(e.target.value) }} />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Job Title</label>
                            <input type="text" value={job_title} onChange={(e) => { setJob(e.target.value) }} />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Avatar</label>
                            <input type="text" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Location</label>
                            <input type="text" value={location} onChange={(e) => { setLocation(e.target.value) }} />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Project</label>
                            <input type="text" value={projects} onChange={(e) => { setProject(e.target.value) }} />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Password</label>
                            <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                    </div>
                </form>
                <div className='button-upD'>
                    <button className='buttonUpSave' >Save</button>
                    <button className='buttonUpCanc' onClick={() => navigate('/admin')}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Add


