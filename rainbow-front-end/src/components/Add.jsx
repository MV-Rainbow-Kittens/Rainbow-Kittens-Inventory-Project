import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Update.css";

function Add() {
    const navigate = useNavigate();

    // const url = "http://localhost:8000/api/products/create";

    //States

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [job, setJob] = useState("");
    const [location, setLocation] = useState("");
    const [avatar, setAvatar] = useState("");
    const [password, setPassword] = useState("");
    const [project, setProject] = useState([]);

    const addUser = async (newUser) => {
        try {
            const res = await fetch("http://localhost:8000/api/users/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            first_name: fName,
            last_name: lName,
            email,
            password,
            profile_pic: image,
            job_title: job,
            location,
            avatar,
            projects: project,
        };
        addUser(newUser);
        setFName("");
        setLName("");
        setEmail("");
        setImage("");
        setJob("");
        setLocation("");
        setAvatar("");
        setPassword("");
        setProject([]);
    };

    return (
        <div className="bodyUp">
            <div className="containerUp">
                <h1 className="titleUp">Add</h1>
                <form onSubmit={handleSubmit}>
                    <div className="user-details-update">
                        <div className="input-box-update">
                            <label className="detailsUp" id="idUp">
                                Id
                            </label>
                            <input type="text" readOnly />
                        </div>

                        <div className="input-box-update">
                            <label className="detailsUp">First Name</label>
                            <input
                                type="text"
                                value={fName}
                                onChange={(e) => {
                                    setFName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="input-box-update">
                            <label className="detailsUp">Last Name</label>
                            <input
                                type="text"
                                value={lName}
                                onChange={(e) => {
                                    setLName(e.target.value);
                                }}
                            />

                        </div>
                        <div className="input-box-update">
                            <label className="detailsUp">Email</label>
                            <input
                                type="email"
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
                                value={image}
                                onChange={(e) => {
                                    setImage(e.target.value);
                                }}
                            />
                        </div>
                        <div className="input-box-update">
                            <label className="detailsUp">Job Title</label>
                            <input
                                type="text"
                                value={job}
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
                            <input type="text" value={project} onChange={(e) => { setProject(e.target.value) }} disabled />

                        </div>
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
                    <button className="buttonUpSave">Save</button>
                </form>
                <div className="button-upD">
                    <button className="buttonUpCanc" onClick={() => navigate("/admin")}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Add;

