import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
    const auth = useContext(AuthContext);

    if (!auth) {
        console.error("AuthContext is not found! Make sure AuthProvider is used.");
        return null;
    }

    const { user, logout } = auth;

    return (
        <nav style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#333",
            padding: "10px 20px",
            color: "white"
        }}>
            <h2>My App</h2>

            <div>
                <Link to="/" style={{ color: "white", margin: "0 10px" }}>Home</Link>
                <Link to="/Booking" style={{ color: "white", margin: "0 10px" }}>Booking</Link>
                <Link to="/Register" style={{ color: "white", margin: "0 10px" }}>Register</Link>

                {user ? (
                    <button onClick={logout} style={{
                        marginLeft: "10px",
                        background: "red",
                        color: "white",
                        width:"70px"
                       
                    }}>
                        Logout
                    </button>
                ) : (
                    <Link to="/login" style={{ color: "white", marginLeft: "10px" }}>Login</Link>
                )}
            </div>
        </nav>
    );
}
