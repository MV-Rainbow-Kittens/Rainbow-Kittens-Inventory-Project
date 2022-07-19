import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import Delete from "./Delete"

function Admin () {

    const [apiData, setDataApi] = useState([])

    const navigate = useNavigate()

    const [delState, setDelState] = useState(false)

    const [id, setId] = useState("")

    const [img, setImg] = useState("")


    const api = "http://localhost:8000/api/products";

    const url = `http://localhost:8000/api/products/${id}`;

    const fecthImg = () => {
        axios.get(url)
            .then((res) => {
                setImg(res.data.products.image)
            })
    }

    const image = img


    const fetch = () => {
        axios.get(api)
            .then((res) => {
                setDataApi(res.data.products)
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
        <div>
            <div>
                <button onClick={() => navigate('/add')}>add</button>
                <p onClick={() => navigate('/')}>❌</p>
            </div>
            {apiData.map( disp => 
                <div key={disp.id}>
                    <label>Title : </label>
                    <input type="text" value={disp.title} readOnly/>
                    <label > Price : </label>
                    <input type="text" value={disp.price}  readOnly/>
                    <button onClick={() => navigate(`/update/${disp.id}`) }>update</button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        delePg()
                        setId(disp.id)
                    }}>delete</button>
                </div>
            )}
            <Delete open={delState} onClose={() => setDelState(false) } id={id} navigate={navigate} image={image} />
        </div>
    )
}

export default Admin