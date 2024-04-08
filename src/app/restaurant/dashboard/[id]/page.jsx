'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditFoodItem = (props) => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(false);

    const router = useRouter();

    useEffect(()=>{
        handleLoadFoodItem();
    }, [])

    const handleLoadFoodItem = async() => {
        let response = await fetch("http://localhost:3000/api/restaurant/foods/edit/"+props.params.id);
        response = await response.json();
        console.log(response, props.params.id);
        if (response.success) {
            setName(response.result.name);
            setPrice(response.result.price);
            setImage(response.result.image);
            setDescription(response.result.description);
        }
        else {
            alert("Can't load")
        }
    }

    const handleEditFoodItem = async () =>{
        if (!name || !price || !image || !description) {
            setError(true)
            return false;
        }
        else{
            setError(false)
        }
        console.log(name, price, price, description);
        let response = await fetch("http://localhost:3000/api/restaurant/foods/edit/"+props.params.id, {
            method:"PUT",
            body:JSON.stringify({name,price,image,description})
        });
        response = await response.json();
        if (response.success){
            router.push("../dashboard")
        }
        else{
            alert("Can't update")
        }

    }

    return (
        <div className="container">
            <h1>Update Food Item</h1>
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
                <button className="button" onClick={handleEditFoodItem}>Update Food Item</button>
            </div>
            <div className="input-wrapper">
                <button className="button" onClick={()=>router.push("../dashboard")}>Back to dashboard</button>
            </div>
        </div>
    )
}

export default EditFoodItem;