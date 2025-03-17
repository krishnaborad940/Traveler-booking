import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
    let { setUser } = useContext(AuthContext);
    let navigate = useNavigate();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            let response = await fetch("http://localhost:8001/user/allUser");
            let data = await response.json();

            // ✅ Email & Password check करें
            const validUser = data.data.find(
                (user) => user.email === email && user.password === password
            );

            if (validUser) {
                localStorage.setItem("token", validUser.email); // ✅ Email को token की तरह save करें
                setUser(validUser);
                navigate("/");
            } else {
                setError("Invalid email or password");
            }
        } catch (err) {
            setError("Login failed. Please try again.");
        }
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
                        required
                    /><br />
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /><br />
                    <button type="submit">Login</button>
                </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </>
    );
}
