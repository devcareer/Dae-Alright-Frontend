import React from "react"
import "./HeaderWraper.scss"
import propTypes from "prop-types"



function HeaderWraper(props) {
    return (
        <header className="header-wrapper">
            {props.renderProp()}
        </header>

    )
}

HeaderWraper.propTypes = {
    renderProp: propTypes.func
}


export default HeaderWraper