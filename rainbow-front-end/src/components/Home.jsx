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
    const usersAscending = [...users].sort((a,b) => a.first_name > b.first_name ? 1 : -1);
    console.log(usersAscending)

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className='container'>
            <div>
                <ul>
                    <li>A-Z</li>
                </ul>
            </div>
            <div className='cardContainer'>
                { usersAscending.length > 0 ? usersAscending.map((user) => <Card key={user.id} user={user} />) : 'Loading...'}
            </div>
        </div>
    
    )
}

export default Home;