import { useEffect, useState } from "react"
import axios from "axios";




function Admin () {

    const [apiData, setDataApi] = useState([])


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

    console.log(apiData);


    return (
        <div>
            <div>
                <button>add</button>
                <p>❌</p>
            </div>
            {apiData.map( disp => 
                <div key={disp.id}>
                    <label>Title : </label>
                    <input type="text" value={disp.title} readOnly/>
                    <label > Price : </label>
                    <input type="text" value={disp.price}  readOnly/>
                    <button>update</button>
                    <button>delete</button>
                </div>
            )}
        </div>
    )
}

export default Admin