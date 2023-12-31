import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import SignUp from "./components/Auth/Signup/SignUp";
import Login from "./components/Auth/Login/Login";
import Cart from "./components/Cart/Cart";
import PrivateComponent from "./components/PrivateComponent";
// import AppContext from "./utils/context";

function App() {
    return (
        <BrowserRouter>

            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<div>About Page</div>} /> */}
                <Route path="/category/:id" element={<Category />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />


                <Route element={<PrivateComponent />}>
                    <Route path="/cart" element={<Cart />} />
                </Route>
            </Routes>
            <Newsletter />
            <Footer />

        </BrowserRouter>
    );
}

export default App;
