'use client';


import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const router = useRouter();    

    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input), 
        });
        if (response.ok) {
            router.push('/kotisivu');
        } else {
            console.error('Login failed');
        }
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setInput({
            ...input,
            [name]: value
        });
    }

    return (
        <div>
            
        
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" 
                    onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"
                    onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
                <button type="button" onClick={() => router.push('./luo-tili')}>Register</button>

            </form>
        
        </div>
    );
    
}