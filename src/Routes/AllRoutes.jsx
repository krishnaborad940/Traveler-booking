
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Booking from '../Pages/Booking'
import Login from '../Pages/Login'
export default function AllRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Booking' element={<Booking/>}/>
            <Route path='/Login' element={<Login/>}/>
        </Routes>
    )
}