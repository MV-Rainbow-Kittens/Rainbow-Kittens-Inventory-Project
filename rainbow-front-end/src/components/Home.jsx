import '../css/Home.css';
import Card from './CardComponent';
import { useState } from 'react';
import { useEffect } from 'react';

function Home () {
    const [ users, setUsers ] = useState([]);
    const getUsers = async() => {
        const res = await fetch('http://localhost:8000/api/users');
        const data = await res.json();
        const { users } = data;
        setUsers(users);
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <div className='container'>
            {/* <h1>Home</h1> */}
            <div className='cardContainer'>
                { users.length > 0 ? users.map((user) => <Card key={user.id} user={user} />) : 'Loading...'}
            </div>
        </div>
    
    )
}

export default Home;
