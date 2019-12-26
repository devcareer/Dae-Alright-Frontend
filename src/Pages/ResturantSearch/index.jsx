import React, { Component } from 'react';

import Header from './Header/Header';
import Searchfilter from './Searchfilter/Searchfilter';
import Footer from '../../components/Footer/Footer';
import Info from './resturantInfo/info';
import './resturantsearch.scss';

 class ResturantSearch extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="midpage" style={{display: 'flex'}}>
                <Searchfilter />
                <section style={{marginLeft:'3rem'}}>
                <Info />
                </section>
                </div>
                {/* <Vendorlist/> */}
                <Footer/>
            </div>
        )
    }
}

export default ResturantSearch