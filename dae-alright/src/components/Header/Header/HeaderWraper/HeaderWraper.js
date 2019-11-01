import React from "react"
import "./HeaderWraper.scss"

function HeaderWraper(props) {
    const styles = {
        backgroundImage:`url("https://res.cloudinary.com/dtbjhs8a6/image/upload/v1572514768/my%20project/lr6xb0ipqmwtgny4lxtu.png")`,
        height: "40em",
        width: "100%",
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "right"
        
    }
    return (
        <div style={styles}>
           {props.renderprop}
        </div>

    )
}


export default HeaderWraper



