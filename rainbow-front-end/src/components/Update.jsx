import { useState, useEffect } from 'react'
import '../css/Update.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import { toast } from 'react-toastify'


function Update() {

    //with one of react router method we are able to grab a specific id number 
    //from admin component so that we can be able to update that data
    const params = useParams()
    const id = params.id
    /* * useParams end here * */

    //Navigate will be helping us to be redirect to any pages that we want
    const navigate = useNavigate()
    /* * end of navigate * */

    //Our api
    const api = `http://localhost:8000/api/products/${id}`;
    /* * api end here * */

    //States
    const [upId, setUpId] = useState("")
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    /* * states end here * */

    //This function is only fetching data and passing their value to the states
    //So that our form will have values  that will need to be updated

    const fetch = () => {
        axios.get(api)
            .then((res) => {
                setUpId(res.data.product.id)
                setDescription(res.data.product.description)
                setImage(res.data.product.image)
                setTitle(res.data.product.title)
                setPrice(res.data.product.price)
            })
    }
    /* * fetch function end here * */


    //we want to use this function in the save button. Once we click we want this function tu run
    const handleSubmit = () => {
        const upUrl = `http://localhost:8000/api/products/update/${id}`;
        const credentials = { title, image, description, price }
        axios.put(upUrl, credentials)
            .then((res) => {

                //toast is a notification that will be appearing as success once our data has been updated
                toast.success(`Item no. ${id} have been updated`, {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                navigate("/admin");
            })
    }
/*  * end of handleSubmit() *  */


    useEffect(() => {
        fetch()
    }, [])

    // console.log(upId);





    return (
        <div className='bodyUp'>
            <div className='containerUp'>
                <h1 className='titleUp'>Update</h1>
                <form>
                    <div className='user-details-update'>
                        <div className='input-box-update'>
                            <label className='detailsUp' id='idUp'>Id</label>
                            <input type="text" readOnly value={upId} />
                        </div>
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

export default Update