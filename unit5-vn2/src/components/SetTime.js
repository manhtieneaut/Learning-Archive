import React, { useState, useEffect } from "react";

const SetTime = () => {
    const [dt, setDt] = useState(new Date().toLocaleString());

    useEffect(() => {
        let secTimer = setInterval( () => {
          setDt(new Date().toLocaleString())
        },5000)
    
        return () => clearInterval(secTimer);
    }, []);

    return (
        <div>
            <label>Thời gian hiện tại:{dt}</label>
        </div>
    )
}
export default SetTime;