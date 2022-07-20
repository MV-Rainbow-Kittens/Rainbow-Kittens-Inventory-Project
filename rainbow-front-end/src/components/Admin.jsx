import React, { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import Delete from "./Delete"
import "../css/Admin.css"
function Admin() {

    const [apiData, setDataApi] = useState([])

    const navigate = useNavigate()

    const [delState, setDelState] = useState(false)

    const [id, setId] = useState("")

    const [img, setImg] = useState("")

    // console.log(apiData);

    const api = "http://localhost:8000/api/users";

    const url = `http://localhost:8000/api/users/${id}`;

    const fecthImg = () => {
        axios.get(url)
            .then((res) => {
                setImg(res.data.users.profile_pic)
            })
    }

    const image = img


    const fetch = () => {
        axios.get(api)
            .then((res) => {
                setDataApi(res.data.users)
            })
    }


    const delePg = () => {
        setDelState(true)
    }

    useEffect(() => {
        fetch()
        fecthImg()
    }, [])



    return (
        <div className="adminCont">
            <div className="admin_nav">Admin Page</div>
            <div className="headAdm">
                <button id="addAdmin" onClick={() => navigate('/add')}>add</button>
                <h1 onClick={() => navigate('/')} id="xAdmin"><strong>X</strong></h1>
            </div>
            {apiData.map(disp =>
                <div key={disp.id} className="adDataDiv">
                    <from id="form">

                        <label className="labelClass">First Name : </label>
                        <input type="text" value={disp.first_name} readOnly className="inputClass" />
                        <label className="labelClass" > Last Name : </label>
                        <input type="text" value={disp.last_name} readOnly className="inputClass" />

                        <div id="adBtnDiv">
                            <button onClick={() => navigate(`/update/${disp.id}`)}>update</button>
                            <button onClick={(e) => {
                                e.preventDefault()
                                delePg()
                                setId(disp.id)
                            }}>delete</button>
                        </div>
                    </from>
                </div>
            )}
            <Delete open={delState} onClose={() => setDelState(false)} id={id} navigate={navigate} image={image} />
        </div>
    )
}

export default Admin
