import React from "react"
import "./details.scss"


function Details(props) {
    return (
        <div>
            <details>
                <summary>{props.summary}</summary>
                <p className="paragraph">{props.text}</p>
            </details>
        </div>
    )
}

export default Details