import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom"



function Admin () {

    const [apiData, setDataApi] = useState([])

    const navigate = useNavigate()


    const api = "http://localhost:8000/api/products";

    const fetch = () => {
        axios.get(api)
            .then((res) => {
                setDataApi(res.data.products)
            })
    }

    useEffect(() => {
        fetch()
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
                    <button onClick={() => navigate(`/update/${disp.id}`)}>update</button>
                    <button>delete</button>
                </div>
            )}
        </div>
    )
}

export default Admin