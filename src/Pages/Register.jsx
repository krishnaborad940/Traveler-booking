import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);

    // ✅ Input Handle Function
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
    
        try {
            let response = await fetch("http://localhost:8001/user/allUser", {  // ✅ सही API
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });
    
            let data = await response.json();
            console.log(data);
            
            if (response.ok) {
                alert("रजिस्ट्रेशन सफल!");
                navigate("/login");
            } else {
                setError(data.message || "रजिस्ट्रेशन असफल!");
            }
        } catch (error) {
            console.log(error)
            setError("सर्वर से कनेक्ट नहीं हो सका! कृपया backend चेक करें।");
        }
    };
    
    
    

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={user.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />
                
                <input
                    type="text"
                    name="confirmpassword"
                    placeholder="Username"
                    value={user.confirmpassword}
                    onChange={handleChange}
                    required
                />
                <button type="submit">रजिस्टर करें</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}
