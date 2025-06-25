"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {Axios} from "axios";



export default function loginpage(){
    const [user, setUser] = React.useState({
        email:"",
        password:"",
    })
    const onLogin = async () => {

    }
    return (
        <div>
            <h1 className="text-center">Login</h1>
            <form className="text-center">
              <label htmlFor="email">Email :</label> <br />
                <input 
                className="p-2 rounded text-black border border-m bg-white placeholder-red-500"
                id="email" 
                type="email" 
                value={user.email}
                onChange={(e)=>setUser({...user, email: e.target.value})}
                placeholder="Email"/> <br />
                <label htmlFor="password">Password :</label> <br />
                <input 
                className="p-2 rounded text-black border border-m bg-white placeholder-red-500"
                id="password" 
                type="password" 
                value={user.password}
                onChange={(e)=>setUser({...user, password: e.target.value})}
                placeholder="Password"/> <br />
                
                <button onClick={onLogin}>Login</button> <br />
                <Link href="/signup">Don't have an account Signup here!!!</Link>
            </form>
        </div>
    )
}