const RestaurantSignup = () => {
    return (
        <>
            <div>
                <h3>Signup</h3>
                <div className="input-wrapper">
                    <input type="text" placeholder="Email id" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Password" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Confirm Password" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Restaurant Name" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="City" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Full Address" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Contact Number" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <button className="button">Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default RestaurantSignup