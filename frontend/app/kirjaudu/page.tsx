'use client';


import { useRouter } from "next/navigation";


export default function Page() {
    const router = useRouter();    


    return (
        <div>
            
        
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Login</button>
                <button type="button" onClick={() => router.push('./luo-tili')}>Register</button>

            </form>
        
        </div>
    );
    
}