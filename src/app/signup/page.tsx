"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {Axios} from "axios";
import { connect } from "@/dbconfig/dbconfig";
import { signUpUser } from "@/dbconfig/signupuser";

export default function signuppage(){
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        username:"",
    })
    const handleSignup = async () => {
    await signUpUser(email, password, roleId);
  };
    return (
        <div>
            <h1 className="text-center">Signup</h1>
            <form className="text-center">
                <label htmlFor="username">Username :</label> <br />
                <input 
                className="p-2 rounded text-black border border-m bg-white placeholder-red-500"
                id="username" 
                type="text" 
                value={user.username}
                onChange={(e)=>setUser({...user, username: e.target.value})}
                placeholder="Username"/> <br />
                <label htmlFor="password">Password :</label> <br />
                <input 
                className="p-2 rounded text-black border border-m bg-white placeholder-red-500"
                id="password" 
                type="password" 
                value={user.password}
                onChange={(e)=>setUser({...user, password: e.target.value})}
                placeholder="Password"/> <br />
                <label htmlFor="email">Email :</label> <br />
                <input 
                className="p-2 rounded text-black border border-m bg-white placeholder-red-500"
                id="email" 
                type="email" 
                value={user.email}
                onChange={(e)=>setUser({...user, email: e.target.value})}
                placeholder="Email"/> <br />
                
                <button onClick={onSignup}>Signup</button> <br />
                <Link href="/login">Visit login page</Link>
            </form>
        </div>
    )
}