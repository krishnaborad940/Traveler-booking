import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AllDetails() {
    const { id, type } = useParams();
    const [itemDetails, setItemDetails] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8001/${type}/${id}`)
            .then(res => res.json())
            .then(result => {
                console.log(result); // Check if result is logged
                setItemDetails(result.data); // Store fetched data in state
            })
            .catch(err => console.log("Error fetching details:", err));
    }, [id, type]);

    if (!itemDetails) return <div>Loading...</div>; // Display loading state

    return (
        <div>
            <h1>{itemDetails.Name} Details</h1>
            {/* Display more details based on the type */}
            {type === "hotel" && (
                <div>
                    <h3>Hotel Name: {itemDetails.Name}</h3>
                    {/* Add other hotel details */}
                </div>
            )}
            {type === "car" && (
                <div>
                    <h3>Car Name: {itemDetails.Name}</h3>
                    {/* Add other car details */}
                </div>
            )}
            {type === "flight" && (
                <div>
                    <h3>Flight Name: {itemDetails.Name}</h3>
                    {/* Add other flight details */}
                </div>
            )}
        </div>
    );
}
