import '../css/Home.css';
import Card from './CardComponent';
import { useState } from 'react';
import { useEffect } from 'react';

function Home () {
    const [ users, setUsers ] = useState([]);

    const [ alphabet, setAlphabet ] = useState([ {letter :'A', name:'' },{letter :'B', name:'' },{letter :'C', name:'' },{letter :'D', name:'' },{letter :'E', name:'' },{letter :'F', name:'' },{letter :'G', name:'' },{letter :'H', name:'' },{letter :'I', name:'' },{letter :'J', name:'' },{letter :'K', name:'' },{letter :'L', name:'' },{letter :'M', name:'' },{letter :'N', name:'' },{letter :'O', name:'' },{letter :'P', name:'' },{letter :'Q', name:'' },{letter :'R', name:'' },{letter :'S', name:'' },{letter :'T', name:'' },{letter :'U', name:'' },{letter :'V', name:'' },{letter :'W', name:'' },{letter :'X', name:'' },{letter :'Y', name:'' },{letter :'Z', name:'' } ]);

    const getUsers = async() => {
        const res = await fetch('http://localhost:8000/api/users');
        const data = await res.json();
        const { users } = data;
        setUsers(users);

        for(var letterPair in alphabet){
            const pair = alphabet[letterPair];
            const usersStartingWithLetter = users.filter((user) => user.first_name.startsWith(pair.letter));
            const ascending = [...usersStartingWithLetter].sort((a,b) => a.first_name > b.first_name ? 1 : -1)
            if(ascending.length < 1){
                console.log(`No names with letter ${pair.letter}`)
            } else{
                pair.name = ascending[0].first_name
            }
            setAlphabet([...alphabet, alphabet[letterPair] = pair]);
        }
    }
    console.log(alphabet)

    const usersAscending = [...users].sort((a,b) => a.first_name > b.first_name ? 1 : -1);

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <div className='sidenav'>
                {alphabet.map((pair) => <a key={pair.letter} href={`#${pair.name}`} >{pair.letter}</a>)}
            </div>
            <div className='cardContainer'>
                { usersAscending.length > 0 ? usersAscending.map((user) => <Card key={user.id} user={user} />) : 'Loading...'}
            </div>
        </div>
    
    )
}

export default Home;