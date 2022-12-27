import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar'
import Table from './components/Table'



function App() {

    const [data, setData] = useState(null)

    useEffect(() => {
        async function getAllUsers(){
            let response = await fetch('http://localhost:3001/users');
            setData( await response.json());
        }
        getAllUsers()
    }, [])

    return (
        <div>
            <Navbar/>
            {data ? <Table users={data}/> : 'Loading...'}

        </div>
    );
}

export default App;
