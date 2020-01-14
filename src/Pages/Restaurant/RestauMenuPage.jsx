import React from "react";
import Header from "../Restaurant/Components/Header";
import Footer from "../../components/Footer/index";
import MenuWrapper from "./Components/MenuWrapper";
import 'bootstrap/dist/css/bootstrap.min.css';

class MenuPage extends React.Component {
  render() {
    return (
      <div className="jj">
        <div style={{ backgroundColor: "#ffffff", width: "100%", }}>
          <Header />
        </div>
      
        <div  style={{backgroundColor: "#E5E5E5", width: "100%", paddingTop: "5%"}}>
        <MenuWrapper />
        </div>
       
        <div style={{ backgroundColor: "#ffffff" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default MenuPage;
