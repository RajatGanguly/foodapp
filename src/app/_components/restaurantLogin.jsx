const RestaurantLogin = () => {
    return (
        <>
            <div>
                <h3>Login</h3>
                <div className="input-wrapper">
                    <input type="text" placeholder="Email id" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Password" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <button className="button">Login</button>
                </div>
            </div>
        </>
    )
}

export default RestaurantLogin