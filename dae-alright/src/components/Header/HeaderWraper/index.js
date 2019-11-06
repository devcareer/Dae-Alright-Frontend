import React from "react"
import "./HeaderWraper.scss"
import propTypes from "prop-types"



function HeaderWraper(props) {
    return (
        <header className="header-wrapper">
<<<<<<< HEAD
            {props.renderProp()}
=======
          {props.renderProp}
>>>>>>> Update index.js
        </header>

    )
}

HeaderWraper.propTypes = {
    renderProp: propTypes.func
}


export default HeaderWraper