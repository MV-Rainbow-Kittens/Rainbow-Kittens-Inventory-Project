import { useState, useEffect } from 'react'
import '../css/Update.css'
import { useNavigate, useParams } from 'react-router-dom'

function Update () {

    const params = useParams()

    const id = params.id

    console.log(id);

    return (
        <div className='bodyUp'>
            <div className='containerUp'>
                <h1 className='titleUp'>Update</h1>
                <form>
                    <div className='user-details-update'>
                        <div className='input-box-update'>
                            <label className='detailsUp' id='idUp'>Id</label>
                            <input type="text" readOnly />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Title</label>
                            <input type="text"  />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Price</label>
                            <input type="text" />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Description</label>
                            <input type="text"  />
                        </div>
                        <div className='input-box-update'>
                            <label className='detailsUp'>Image</label>
                            <input type="text"  />
                        </div>
                    </div>
                </form>
                <div>
                    <button className='buttonUp'>Save</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Update