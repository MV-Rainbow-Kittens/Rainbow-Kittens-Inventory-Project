import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Update.css";



function Add () {

    const navigate = useNavigate()

    const url = "http://localhost:8000/api/products/create";

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");



    const handleSubmit = () => {
        const credentials = { title, price, description, image };
        axios.post(url, credentials)
            .then((res) => {

            })
            navigate('/admin')
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
                            <input type="text"  />
                        </div> */}
                        
                        <div className='input-box-update'>
                            <label className='detailsUp'>Title</label>
                            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Price</label>
                            <input type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Description</label>
                            <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Image</label>
                            <input type="text" value={image} onChange={(e) => { setImage(e.target.value) }} />
                        </div>
                    </div>
                </form>
                <div>
                    <button className='buttonUp' onClick={handleSubmit}>Save</button>
                    <button onClick={() => navigate('/admin')}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Add


