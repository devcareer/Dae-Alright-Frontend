import React from "react"
import "./header.scss"
import HeaderWraper from "../../../../components/Header/HeaderWraper"
import Navigation from "../../../../components/Navigation/index"
import SearchBar from "../../../../components/SearchBar/index"

function Header() {
    return (
        <div>
            <HeaderWraper renderProp={() => (
                <div className="container-fluid header">
                <div className="row">
                    <div className="col-12 header">
                        <Navigation />
                        <h2 className="header-text"><b>Fresh, Delicious</b> meals<br /> to reach your optimum<br /> <b>health & fitness</b></h2>
                        <h2 className="header-paragraph">Discover local restaurants that <br />delivers to your doorstep!</h2>
                    </div>
                </div>
                <div className="search">
                     <SearchBar />
                </div>
                   
                </div>
                
                )}/>
        </div>
    )
}

export default Header