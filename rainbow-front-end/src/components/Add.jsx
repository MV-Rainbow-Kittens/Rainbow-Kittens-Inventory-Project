import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Update.css";



function Add () {

    const navigate = useNavigate()

    const url = "http://localhost:8000/api/products/create";

    //States
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [job, setJob] = useState("")
    const [location, setLocation] = useState("")
    const [avatar, setAvatar] = useState("")
    const [password, setPassword] = useState("")
    const [project, setProject] = useState("")



    const handleSubmit = () => {
        const upUrl = `http://localhost:8000/api/users/create`;
        const credentials = { fName, image, lName, email, job, location, avatar,password,project }
        axios.post(upUrl, credentials)
            .then((res) => {

                // });
                navigate("/admin");
            })
    }

    useEffect(() => {

    })


    return (
        <div className='bodyUp'>
            <div className='containerUp'>
                <h1 className='titleUp'>Add</h1>
                <form>
                    <div className='user-details-update'>
                        {/* <div className='input-box-update'>
                            <label className='detailsUp' id='idUp'>Id</label>
                            <input type="text" readOnly value={id} />
                        </div> */}
                        <div className='input-box-update'>
                            <label className='detailsUp'>First Name</label>
                            <input type="text" value={fName} onChange={(e) => { setFName(e.target.value) }} />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Last Name</label>
                            <input type="text" value={lName} onChange={(e) => { setLName(e.target.value) }} />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Email</label>
                            <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Picture</label>
                            <input type="text" value={image} onChange={(e) => { setImage(e.target.value) }} />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Job Title</label>
                            <input type="text" value={job} onChange={(e) => { setJob(e.target.value) }} />
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
                            <input type="text" value={project} onChange={(e) => { setProject(e.target.value) }} />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Password</label>
                            <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                    </div>
                </form>
                <div className='button-upD'>
                    <button className='buttonUpSave' onClick={handleSubmit}>Save</button>
                    <button className='buttonUpCanc' onClick={() => navigate('/admin')}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Add


