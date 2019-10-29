import React from 'react'
import './Footer.scss'


function Footer() {
    return (
        <footer className="deyAlrightFooterContainer">
            <div className="logoDiv">
             <img src="https://res.cloudinary.com/dq9utkjw2/image/upload/v1572357304/logo_zrlxud.png" alt="company-logo" className="footerLogo" />
            </div>
            <div className="deyAlrightFooter">
                <div className="deyAlrightFooterRow-1">
                    <div className="row1col1">
                        <select name="browsers" size="1" className="row1item1">
                            <option>Select All Cities</option>
                            <option value="chrome">Google Chrome</option>
                            <option value="safari">Safari</option>
                            <option value="explorer">Internet Explorer</option>
                            <option value="firefox">Firefox</option>
                            <option value="opera">Opera</option>
                            <option value="brave">Brave </option>
                        </select>
                        <ul className="row1item2">
                         <li><a href="footer.js">About Dae alright</a></li>
                         <li><a href="footer.js">Become a delivery partner</a></li>
                         <li><a href="footer.js">Become a business partner</a></li>
                        </ul>
                    </div>
                    <div className="row1col2">
                        <select name="browsers" size="1" class="row2item1">
                            <option>Select All Cities</option>
                            <option value="chrome">Google Chrome</option>
                            <option value="safari">Safari</option>
                            <option value="explorer">Internet Explorer</option>
                            <option value="firefox">Firefox</option>
                            <option value="opera">Opera</option>
                            <option value="brave">Brave </option>
                        </select>
                    </div>
                </div>
                <div className="deyAlrightFooterRow-2">
                    <div className="row2col1">
                        <ul className="row2item1">
                              <li><a href="footer.js">FAQs</a></li>
                             <li><a href="footer.js">Blog</a></li>
                        </ul>
                        <ul className="row2item2">
                         <li><a href="footer.js">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="row2col2">
                        <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1571821215/my%20project/et9bmbe3mjhylwbfmree.png" alt="" />
                        <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1571821216/my%20project/gix7baujoc1bqeczruru.png" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
