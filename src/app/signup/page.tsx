"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { connect } from "@/dbconfig/dbconfig";
import { signUpUser } from "@/dbconfig/signupuser";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
    roleId: "",
  });

  const handleSignup = async () => {
    try {
      await signUpUser(user.email, user.password, user.roleId);
      console.log("✅ User signup successful");
    } catch (error) {
      console.error("❌ Signup error:", error);
    }
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
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
        /> <br />

        <label htmlFor="password">Password :</label> <br />
        <input
          className="p-2 rounded text-black border border-m bg-white placeholder-red-500"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        /> <br />

        <label htmlFor="email">Email :</label> <br />
        <input
          className="p-2 rounded text-black border border-m bg-white placeholder-red-500"
          id="email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        /> <br />

        <label htmlFor="roleId">Role :</label> <br />
        <select
          className="p-2 rounded text-black border border-m bg-white"
          id="roleId"
          value={user.roleId}
          onChange={(e) => setUser({ ...user, roleId: e.target.value })}
        >
          <option value="">Select a role</option>
          <option value="company">Company</option>
          <option value="vendor">Vendor</option>
          <option value="driver">Driver</option>
        </select> <br />

        <button type="button" onClick={handleSignup}>
          Signup
        </button> <br />

        <Link href="/login">Visit login page</Link>
      </form>
    </div>
  );
}