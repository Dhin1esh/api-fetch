import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
function Dhinesh() {
    const [user, setuser] = useState([]);

    useEffect(() => {
        //api call
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setuser(data))
            .catch(err => console.log(err));

    }, []); // empty dependency array = run once

    console.log(user);

    return (
        <div className="h-screen w-screen bg-gray-500 font-semibold p-5">
            <ul>
                {user.map(user => (
                    <li>{user.id}. {user.name} ({user.email})</li>
                )
                )}
            </ul>
        </div>
    )
}

export default Dhinesh