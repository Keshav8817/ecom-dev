import { Route, Routes } from "react-router-dom"
import Login from "../Pages/Login"
import Home from "../Pages/Home"
import NewReleases from "../Pages/NewReleases"
import Mens from "../Pages/Mens"
import Womens from "../Pages/Womens"
import Accessories from "../Pages/Accessories"
import Abouts from "../Pages/Abouts"
import Orders from "../Pages/Orders"
import Cart from "../Pages/Cart"
import Fav from "../Pages/Fav"
import ProductDetails from "../Pages/ProductDetails"

const PageRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/newReleases" element={<NewReleases/>}></Route>
            <Route path="/mens" element={<Mens/>}></Route>
            <Route path="/womes" element={<Womens/>}></Route>
            <Route path="/accessories" element={<Accessories/>}></Route>
            <Route path="/abouts" element={<Abouts/>}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/favorites" element={<Fav/>}></Route>
            <Route path="/productDetails/:id" element={<ProductDetails/>}></Route>
        </Routes>
    )
}

export default PageRoute