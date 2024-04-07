'use client'
import { useState } from "react"
import RestaurantLogin from "../_components/RestaurantLogin.jsx"
import RestaurantSignup from "../_components/RestaurantSignup.jsx"
import RestaurantHeader from "../_components/RestaurantHeader.jsx"

import './style.css'
import Footer from "../_components/Footer.jsx"

const Restaurant = () => {

    const [login, setLogin] = useState(true)

    return (
        <>
            <div className="container">
                <RestaurantHeader></RestaurantHeader>
                <h1>Restaurant Login/Signup Page</h1>
                {
                    login ? <RestaurantLogin /> : <RestaurantSignup />
                }

                <button className="button-link" onClick={() => setLogin(!login)}>
                    {login ? "Do not have account? Signup" : "Already have an account? Login"}
                </button>
            </div>
            <Footer/>
        </>
    )
}

export default Restaurant