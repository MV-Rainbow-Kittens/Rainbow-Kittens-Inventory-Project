import { useState, useEffect } from "react";
import "../css/Update.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
    //with one of react router method we are able to grab a specific id number
    //from admin component so that we can be able to update that data
    const params = useParams();
    const id = params.id;
    /* * useParams end here * */

    //Navigate will be helping us to be redirect to any pages that we want
    const navigate = useNavigate();
    /* * end of navigate * */

    //Our api
    const api = `http://localhost:8000/api/users/${id}`;
    /* * api end here * */

    //States

    const [first_name, setFName] = useState("");
    const [last_name, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [profile_pic, setImage] = useState("");
    const [job_title, setJob] = useState("");
    const [location, setLocation] = useState("");
    const [avatar, setAvatar] = useState("");
    const [password, setPassword] = useState("");
    const [projects, setProject] = useState("")

    /* * states end here * */

    //This function is only fetching data and passing their value to the states
    //So that our form will have values  that will need to be updated


    /* * fetch function end here * */
    const getUser = async () => {
        const res = await fetch(api);
        const data = await res.json();
        setFName(data.singleUser.first_name);
        setLName(data.singleUser.last_name);
        setEmail(data.singleUser.email);
        setImage(data.singleUser.profile_pic);
        setJob(data.singleUser.job_title);
        setLocation(data.singleUser.location);
        setAvatar(data.singleUser.avatar);
        setPassword(data.singleUser.password);
        setProject(data.singleUser.projects);
    };





    const updateUser = async (updatedUser) => {
        try {
            const res = await fetch(`http://localhost:8000/api/users/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedUser),

            });
            const data = await res.json();
        } catch (error) {
            console.log(error.message);
        }
        navigate('/admin')
    };

    const upId = id

    //we want to use this function in the save button. Once we click we want this function tu run
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {

            first_name, last_name, email, password, profile_pic, job_title, location, avatar
        }
        updateUser(updatedUser);
    };

    /*  * end of handleSubmit() *  */

    useEffect(() => {
        getUser();
    }, []);

    // console.log(upId);

    // const count = 1

    return (
        <div className="bodyUp">
            <div className="containerUp">
                <h1 className="titleUp">Update</h1>
                <form onSubmit={handleSubmit}>
                    <div className="user-details-update">
                        <div className="input-box-update">
                            <label className="detailsUp" id="idUp">
                                Id
                            </label>
                            <input type="text" readOnly value={id} />
                        </div>
                        <div className="input-box-update">
                            <label className="detailsUp">First Name</label>
                            <input
                                type="text"
                                value={first_name}
                                onChange={(e) => {
                                    setFName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="input-box-update">
                            <label className="detailsUp">Last Name</label>
                            <input
                                type="text"
                                value={last_name}
                                onChange={(e) => {
                                    setLName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="input-box-update">
                            <label className="detailsUp">Email</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div className="input-box-update">
                            <label className="detailsUp">Picture</label>
                            <input
                                type="text"
                                value={profile_pic}
                                onChange={(e) => {
                                    setImage(e.target.value);
                                }}
                            />
                        </div>
                        <div className="input-box-update">
                            <label className="detailsUp">Job Title</label>
                            <input
                                type="text"
                                value={job_title}
                                onChange={(e) => {
                                    setJob(e.target.value);
                                }}
                            />
                        </div>
                        <div className="input-box-update">
                            <label className="detailsUp">Avatar</label>
                            <input
                                type="text"
                                value={avatar}
                                onChange={(e) => {
                                    setAvatar(e.target.value);
                                }}
                            />
                        </div>
                        <div className="input-box-update">
                            <label className="detailsUp">Location</label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => {
                                    setLocation(e.target.value);
                                }}
                            />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Project</label>
                            <input type="text" value={projects} onChange={(e) => { setProject(e.target.value) }} disabled />
                        </div>
                        {/* {projects.map(proj => 
                            <div className='input-box-update'>
                                <label>Projects :  </label>
                                <input type="text" value={proj.projects}  />
                            </div>
                            )} */}
                        <div className="input-box-update">
                            <label className="detailsUp">Password</label>
                            <input
                                type="text"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="button-upD">
                        <button className="buttonUpSave">Save</button>
                        <button className="buttonUpCanc" onClick={() => navigate("/admin")}>Cancel</button>
                    </div>
                </form>
                <div className="button-upD">
                </div>
            </div>
        </div>
    );
}

//update

export default Update;