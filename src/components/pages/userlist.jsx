import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Userlist() {

    const [data, setdata] = useState([])
    useEffect(() => {
        const fetchUserDetails = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            setdata(res.data)
        }
        fetchUserDetails()
    }, [])

    return (
        <div>
            <h1 className="text-2xl font-bold">Userlist</h1>
            {data.map((user) => (
                <Link to={`/userlist/${user.id}`}>
                    <h1 className="font-semibold">{user.name}</h1>
                </Link>

                // <h1 className="font-semibold">{user.name}</h1>
            ))}
        </div>
    );
};
