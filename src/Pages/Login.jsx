import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
       
    };

    return (
        <>
            <h1>Login</h1>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        value={email}
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    /><br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
}
