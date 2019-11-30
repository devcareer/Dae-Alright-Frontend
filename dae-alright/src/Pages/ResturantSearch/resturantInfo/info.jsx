import React from 'react'
import DummyList from "../../../dummy-list"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./info.scss"
 class Info extends React.Component {
    constructor() {
        super()
        this.state = {
            foodList: DummyList
        }
    }
    render() {
        
        const foodContainer = this.state.foodList.map((item, i ) =>
        
         (i <= 5 ? <div className="info">
            <img className='img' src={item.imageUrl} />
            <div>
    <h1 className='name'>{item.name}</h1>
        <p>{item.address}</p>
         <div className='order'>
            <h3>Min:{item.order}</h3>
            <h3>Delivery: {item.delivery}</h3>
         </div>
            </div>
            
            <div className='review'>
            <FontAwesomeIcon icon={faStar}  color ="#D6DB46" className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <br/>
                <span>100 Reviewer</span><br/>
                <input className='button' type="button" value="Discovery" />
            </div>
        </div>: null))
        return (
            <div>
                {foodContainer}
                <input className='btn' type="button" value="Load more"/>
            </div>

        )
        
    }
    // return (
    //     // <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',border:'1px solid red', width: '45vw', height:'120px'}}>
    //     //  <section style={{border:'1px solid grey',width:'80px', height:'75px', backgroundColor:'yellow'}}> 
    //     // <img src="" alt="" style={{width:'75px', height:'50px', backgroundColor:'blue', borderRadius:'50%', marginTop:'2rem'}}/>      
    //     //  </section>
        
    //     //   <section style={{backgroundColor:'green'}}>
    //     //       <span>Ajegunle chou</span><br/>
    //     //       <span>apple, cheese, beef, steaks</span><br/>
    //     //       <span>Min: #400</span> <span>Delivery: Varies by distance</span>
    //     //   </section>
    //     //   {/* <hr style={{width:'18px',height:'inherit'}}/> */}
    //     //   <section style={{ backgroundColor:'red'}}>
    //     //       <span>101 reviews</span><br/>
    //     //     <button>discover</button>
    //     //   </section>
    //     // </div>
    // )
}

export default Info