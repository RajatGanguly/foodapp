import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FoodItemList = () => {

    const [foodItems, setFoodItems] = useState(null);

    const router = useRouter();

    const loadFoodItems = async () => {

        let restaurantData = JSON.parse(localStorage.getItem("restaurantUser"))
        let restaurant_id = restaurantData._id

        let response = await fetch("http://localhost:3000/api/restaurant/foods/"+restaurant_id);
        response = await response.json();
        // console.log(response);
        if (response.success) {
            console.log(typeof response.result);
            setFoodItems(response.result);
            console.log(foodItems);
        }
        else {
            alert("Can't load")
        }
    }

    const deleteFoodItem = async(id) => {
        let response = await fetch("http://localhost:3000/api/restaurant/foods/"+id, {
            method: "DELETE",
        });
        response = await response.json();
        if (response.success){
            loadFoodItems()
        }
        else{
            alert("Can't delete")
        }
    }

    useEffect(() => {
        loadFoodItems();
        // console.log(foodItems);
    }, []);

    useEffect(() => {
        console.log(foodItems); // Log foodItems when it changes
    }, [foodItems]); // Add foodItems as a dependency


    return (
        <>
            <h1>Food Items</h1>
            <table>
                <thead>
                    <tr>
                        <td>S.N.</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                        <td>Operations</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        foodItems && foodItems.map((item, key) => (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>{item.image}</td>
                                <td>
                                    <button onClick={()=>router.push("dashboard/"+item._id)}>Edit</button>
                                    <button onClick={()=>deleteFoodItem(item._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default FoodItemList;