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

<<<<<<< HEAD

export default HeaderWraper
=======
export default HeaderWraper
<<<<<<< HEAD



>>>>>>> Update index.js
=======
>>>>>>> Update index.js
