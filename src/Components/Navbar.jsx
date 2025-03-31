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
            background: "linear-gradient(90deg, #6a11cb, #2575fc)",
            padding: "10px 20px",
            color: "white"
        }}>
            <h2>My App</h2>

            <div style={{marginRight:"100px"}}>
                <Link to="/" style={{ color: "white", margin: "0 50px",textDecoration:"none " }}>Home</Link>
                <Link to="/Booking" style={{ color: "white", margin: "0 50px",textDecoration:"none " }}>Booking</Link>
                <Link to="/Register" style={{ color: "white", margin: "0 50px" ,textDecoration:"none "}}>Register</Link>

                {user ? (
                    <button onClick={logout} style={{
                        marginLeft: "50px",
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
