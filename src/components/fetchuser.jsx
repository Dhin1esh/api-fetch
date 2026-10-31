import { useEffect, useState } from "react";
import axios from "axios";

const FetchUser = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            // const response = await fetch("https://jsonplaceholder.typicode.com/users")
            // console.log("Response:", response)

            // const data = await response.json()
            // console.log("Data:", data)

            const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
            console.log("Response:", response.data)
            setData(response.data);
        }
        fetchData();

    }, [])

    return (
        <div className=" bg-blue-900 p-5">
            <div className="flex item-center justify-center">
                <h1 className="text-5xl font-bold text-cyan-50">Users-List</h1>
            </div>
            <div>
                <ol className=" text-olive text-white">
                    {data.map(
                        (values) => (
                            <li className="shadow-xl">{values.title}</li>
                        )
                    )}
                </ol>
            </div>
        </div >
    );
}

export default FetchUser
