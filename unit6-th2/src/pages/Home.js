import React from "react";
import { useParams,useNavigate} from "react-router-dom";

export default function HomePage() {
    const { userID } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Đây là Home</h1>
            <button onClick={()=>{navigate("/user")}} >to user</button>
            Profile of User ID = { userID }
        </div>
    )
}