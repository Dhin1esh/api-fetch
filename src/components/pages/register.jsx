import { useState } from "react";

export default function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    //validation
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()

        setNameError();
        setEmailError();
        //validation
        let isValid = true
        if (name.trim() === "") {
            setNameError("name required")
            isValid = false
        } else if (email.trim() === "") {
            setEmailError("email required")
            isValid = false
        }

        if (!isValid) {
            return;
        }
        alert("form submitted......")
    }

    return (
        <div className="h-screen w-full flex items-center justify-center flex-col gap-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter your name..." className="border-2 border-green-400 outline-none px-4 py-2 rounded-md"></input>
                <p className="text-red-500 ">{nameError}</p>
                <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example:dhinesh@gmail.com " className="border-2 border-green-400 outline-none px-4 py-2 rounded-md"></input>
                <p className="text-red-500" >{emailError}</p>
                <button className="bg-blue-500 py-1 rounded-sm cursor-pointer"> submit</button>
            </form>
        </div>
    );
};
