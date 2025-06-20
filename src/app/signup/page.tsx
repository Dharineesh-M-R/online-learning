"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {Axios} from "axios";



export default function signuppage(){
    const [user, serUser] = React.useState({
        email:"",
        password:"",
        username:"",
    })
    return (
        <div>
            <h1>Signup</h1>
            <form action="">
                <label htmlFor="">Login</label>
                <input type="email" /><br />
                <label htmlFor="">Password</label>
                <input type="password" /><br />
                <input type="button" />
            </form>
        </div>
    )
}