'use client';
import Link from 'next/link';
export default function LoginPage() {
  return (
    <>
      <header>
        <h2>Welcome to My App</h2>
      </header>

      <main>
        <h1>Login</h1>
        <form>
          <label htmlFor="email" >Email</label>
          <input type="email" id="email" /><br />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" /><br />

          <input type="submit" value="Submit" /><br />
        </form>
      </main>

      <footer>
        <p>© 2025 My App. All rights reserved.</p>
      </footer>
    </>
  );
}
