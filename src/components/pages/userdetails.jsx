import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Userdetails() {
    const { id } = useParams()
    console.log(`ID:, ${id}`)
    const [data, setdata] = useState([])

    useEffect(() => {
        const fetchUserDetails = async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setdata(res.data)
            console.log("Data:", res.data);
        }
        fetchUserDetails()
    }, [])
    return (
        <div>
            <h1>Userdetails</h1>
            <h1 className="text-2xl font-semibold text-red-500"></h1>
        </div>
    );
};
