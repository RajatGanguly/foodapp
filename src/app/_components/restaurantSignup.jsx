import { useRouter } from "next/navigation";
import { useState } from "react"


const RestaurantSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [phoneno, setPhoneno] = useState("");

    const [error, setError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const router = useRouter();
    
    const handleSignup = async () => {

        if (password != cpassword) {
            setPasswordError(true)
            return false
        }
        else{
            setPasswordError(false)
        }
        if(!email || !password || !cpassword || !name || !city || !address || !phoneno){
            setError(true)
            return false
        }
        else{
            setError(false)
        }

        console.log(email, password, cpassword, name, city, address, phoneno);

        let response = await fetch("http://localhost:3000/api/restaurant", {
            method:"POST",
            body:JSON.stringify({email, password, name, city, address, phoneno})
        })

        response = await response.json();
        console.log(response);
        if (response.success) {
            alert("Restaurant added successfully")
            const {result} = response
            delete result.password
            localStorage.setItem("restaurantUser", JSON.stringify(result))
            router.push("/restaurant/dashboard");
        }
    }
    return (
        <>
            <div>
                <h3>Signup</h3>
                <div className="input-wrapper">
                    <input type="text" placeholder="Email id" className="input-field" value={email} onChange={(event)=>{setEmail(event.target.value)}}
                     />
                    {
                        error && !email && <span className="input-error">Please enter valid email</span>
                    }
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Password" className="input-field" value={password} onChange={(event)=>{setPassword(event.target.value)}} />
                    {
                        passwordError && <span className="input-error">Password and Confirm Password not match</span>
                    }
                    {
                        error && !password && <span className="input-error">Please enter valid password</span>
                    }
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Confirm Password" className="input-field" value={cpassword} onChange={(event)=>{setCpassword(event.target.value)}} />
                    {
                        passwordError && <span className="input-error">Password and Confirm Password not match</span>
                    }
                    {
                        error && !cpassword && <span className="input-error">Please enter valid confirm password</span>
                    }
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Restaurant Name" className="input-field" value={name} onChange={(event)=>{setName(event.target.value)}} />
                    {
                        error && !name && <span className="input-error">Please enter valid Restaurant Name</span>
                    }
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="City" className="input-field" value={city} onChange={(event)=>{setCity(event.target.value)}} />
                    {
                        error && !city && <span className="input-error">Please enter valid city</span>
                    }
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Full Address" className="input-field" value={address} onChange={(event)=>{setAddress(event.target.value)}} />
                    {
                        error && !address && <span className="input-error">Please enter valid address</span>
                    }
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Contact Number" className="input-field" value={phoneno} onChange={(event)=>{setPhoneno(event.target.value)}} />
                    {
                        error && !phoneno && <span className="input-error">Please enter valid Phone Number</span>
                    }
                </div>
                <div className="input-wrapper">
                    <button className="button" onClick={handleSignup}>Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default RestaurantSignup