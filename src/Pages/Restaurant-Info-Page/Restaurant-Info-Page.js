import React from 'react'

import {Tabs, Tab, TabList, TabPanel} from 'react-tabs'

import 'react-tabs/style/react-tabs.css'
import './Restaurant-Info-Page.style.scss'

import Footer from '../../components/Footer/index'
import RestaurantInfoTabThree from '../../components/Restaurant-info-tabs/restaurant-info-tab-three'
import RestaurantInfoTabTwo from '../../components/Restaurant-info-tabs/restaurant-info-tab-two'
import RestaurantInfoTabOne from '../../components/Restaurant-info-tabs/restaurant-info-tab-one'

function RestaurantInfo() {
    return (
        <body className='restaurant-page'>
            <header className='restaurant-page-header'></header>
            <main className='restaurant-page-main'>
                <div className='left-main-section'></div>
                {/* <div className='middle-main-section'>
                    <div className='middle-main-section-titles'>
                        <div className='main-section-titles menu'>
                            <p><img  alt='menu icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577444808/ayirh2x9edkkqqhy7gjb.png'/> Menu </p>
                        </div>
                        <div className='main-section-titles reviews'>
                            <p><img  alt='menu icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577501477/qp96zwcecs2lfdu36ee8.png'/> Reviews (1) </p>
                        </div>
                        <div className='main-section-titles restaurant-info'>
                            <p><img  alt='menu icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577501477/xuqj0atynsjwzla4ubhk.png'/> Restaurant Info </p>
                        </div>
                    </div>
                    
                    <RestaurantInfoTabThree />

                </div> */}
                <Tabs className='middle-main-section'>
                    <TabList className='middle-main-section-titles'>
                        <Tab className='main-section-titles menu'>
                            <p><img  alt='menu icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577444808/ayirh2x9edkkqqhy7gjb.png'/> Menu </p>
                        </Tab>
                        <Tab className='main-section-titles reviews'>
                            <p><img  alt='menu icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577501477/qp96zwcecs2lfdu36ee8.png'/> Reviews (1) </p>
                        </Tab>
                        <Tab className='main-section-titles restaurant-info'>
                            <p><img  alt='menu icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577501477/xuqj0atynsjwzla4ubhk.png'/> Restaurant Info </p>
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <RestaurantInfoTabOne />
                    </TabPanel>
                    <TabPanel>
                        <RestaurantInfoTabTwo />
                    </TabPanel>
                    <TabPanel>
                        <RestaurantInfoTabThree />
                    </TabPanel>
                    
                    

                </Tabs>
                <div className='right-main-section'></div>
            </main>
            
            <Footer />
        </body>
    )
}

export default RestaurantInfo