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

                        <label className="labelClass">Title : </label>
                        <input type="text" value={disp.title} readOnly className="inputClass" />
                        <label className="labelClass" > Price : </label>
                        <input type="text" value={disp.price} readOnly className="inputClass" />

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
