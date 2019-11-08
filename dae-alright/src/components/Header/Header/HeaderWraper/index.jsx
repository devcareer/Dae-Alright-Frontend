import React from "react"
import "./HeaderWraper.scss"
import PropType from "prop-types"

function HeaderWraper(props) {
    
    return (
        <div className="header-wrapper">
           {props.renderProp()}
        </div>

    )
}

HeaderWraper.PropType = {
    renderProp: PropType.func
}

export default HeaderWraper