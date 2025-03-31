import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext"; // ✅ Import करें
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Booking from "../Pages/Booking";
import Register from "../Pages/Register";

export default function App() {
    return (
        <AuthProvider>  {/* ✅ Context Provider से Wrap करें */}
           <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Booking" element={<Booking />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/allDetails/:type/:id" element={<allDetails />} />
                </Routes>
        </AuthProvider>
    );
}
