import React from "react";
import Header from '../Restaurant/Components/Header'
import Footer from '../../components/Footer/index'
import FoodCard from '../../../src/Pages/Restaurant/Components/FoodCard'
import FoodMenu from '../../Pages/Restaurant/Components/FoodMenu'

class MenuPage extends React.Component {
  render() {
    return (
      <div style={{backgroundColor:"#E5E5E5"}}>
        <div style={{backgroundColor:"#ffffff"}}>
              <Header />
           </div> 

           <FoodMenu/>
                <FoodCard/>
         
          
                <div style={{backgroundColor:"#ffffff"}}>
              <Footer />
            </div>
      </div>
    );
  }
}

export default MenuPage;
