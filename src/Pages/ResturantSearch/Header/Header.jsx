import React from 'react';

import HeaderWraper from '../../../components/Header/HeaderWraper/index';
import Navigation from '../../../components/Navigation/index';
import SearchBar from '../../../components/SearchBar/index';
import './Header.scss';

 const Header = () => {
    return (
        <div>
            <HeaderWraper renderProp={() => (
                <div className='header-txt'>
                    <Navigation />
                    <section className="fresh">
                      <h3> 
                        <span className="colored-txt">
                            Fresh, Delicious
                        </span> meals <br/>
                        to reach your optimum<br/>
                        <span className="colored-txt">
                           health <span className='amp'> &</span> fitness
                        </span>
                        </h3>
                        <p className="sm-txt">
                            we can deliver even the most unsual idea!
                        </p>
                    </section>
                    <section className="discover">
                        <h3 className="text">
                            Discover local resturants that<br/>
                            deliver to your doorstep!
                        </h3>
                    </section>
                    <SearchBar />
                   
                </div>
            )} />
            
             <section className="result">
                        <h3>showing all 6 results</h3>
                        <select name="" id="">
                            <option value="">Default sorting</option>
                            <option value=""> sorting</option>
                        </select>
                    </section>
                    <hr />
        </div>
    )
}

export default Header;