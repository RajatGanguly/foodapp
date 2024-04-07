import { useState } from "react";

const AddFoodItem = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(false);

    const handleAddFoodItem = async () =>{
        if (!name || !price || !image || !description) {
            setError(true)
            return false;
        }
        else{
            setError(false)
        }
        console.log(name, price, price, description);
        const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
        let restaurant_id;
        if (restaurantData){
            restaurant_id = restaurantData._id;
        }
        console.log(name, price, image, description, restaurant_id);
        let response = await fetch("http://localhost:3000/api/restaurant/foods", {
            method:"POST",
            body:JSON.stringify({name, price, image, description, restaurant_id})
        })
        console.log(response);
        response = await response.json();
        if (response.success) {
            alert("Food added successfully")
        }
        else{
            alert("Can't add food")
        }
    }

    return (
        <div className="container">
            <h1>Add New Food Item</h1>
            <div className="input-wrapper">
                <input type="text" className="input-field" placeholder="Enter food name" value={name} onChange={(event)=>setName(event.target.value)} />
                {error && !name && <span className="input-error">Please enter valid name</span>}
            </div>
            <div className="input-wrapper">
                <input type="text" className="input-field" placeholder="Enter price" value={price} onChange={(event)=>setPrice(event.target.value)} />
                {error && !price && <span className="input-error">Please enter valid price</span>}
            </div>
            <div className="input-wrapper">
                <input type="text" className="input-field" placeholder="Enter image path" value={image} onChange={(event)=>setImage(event.target.value)} />
                {error && !image && <span className="input-error">Please enter valid name</span>}
            </div>
            <div className="input-wrapper">
                <input type="text" className="input-field" placeholder="Enter description" value={description} onChange={(event)=>setDescription(event.target.value)} />
                {error && !description && <span className="input-error">Please enter valid name</span>}
            </div>
            <div className="input-wrapper">
                <button className="button" onClick={handleAddFoodItem}>Add Food Item</button>
            </div>
        </div>
    )
}

export default AddFoodItem;