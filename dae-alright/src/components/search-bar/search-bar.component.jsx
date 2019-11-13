import React from 'react';
import './search-bar.style.scss';
import SearchDropDown from './component/dropdown/search.dropdown.component';
import ButtonSearch from './component/button/button.component';
import InputSearch from './component/input/input.component';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        // this.handleChangeSearch = this.handleChangeSearch.bind(this);
        // this.handleChangeFilter = this.handleChangeFilter.bind(this);       

        this.state = {
            cities: [{
                id: '1',
                place: 'Nigeria'}, 
                {
                id: '2',
                place: 'Dubai'}, 
                {
                id: '3',
                place: 'USA'}, 
                {
                id: '4',
                place: 'South Africa'}],

            locations: [{
                id: '1',
                place: 'lagos'},
                {
                id: '2',
                place: 'abuja'}, 
                {
                id: '3',
                place: 'ibadan'}, 
                {
                id: '4',
                place: 'ondo'}, 
                {
                id: '5',
                place: 'akure'}],

            isFindFood: false,

            searchFood: "",
            
            sortList: [ 
                {
                id: '1',
                place: 'Name'},
                {
                id: '2',
                place: 'location'},
                {
                id: '3',
                place: 'cuisine'}

            ]

        }
    }

   handleClick() {
       this.setState({
           isFindFood: true
       })
   }

    // handleChangeSearch(props) {
    //     let x = props.find(prop => prop.food.toLowerCase() === this.state.searchFood.toLowerCase());
    //     console.log(x)
    // }

    // handleChangeFilter(props) {
    //     let y = props.filter(prop => prop.food.toLowerCase().includes(this.state.searchFood.toLowerCase()));
    //     console.log(y)
    // }

    

    render() {
            // const isFindFood = this.state.isFindFood;
            const {cities, locations, isFindFood, sortList} = this.state;

            let show = [];
            if (isFindFood) {
                show= [
                    
                    <SearchDropDown places={cities} text='Select your city' />,
                    <SearchDropDown places={locations} text='Select location' />,
                    <ButtonSearch text='Find Food' onClick={this.handleClick} />,
                    <InputSearch 
                        placeholder='Search' 
                        // onCompositionEnd={this.handleChangeSearch(foodData)} 
                        // onChange={this.handleChangeSearch(foodData)}
                        />,
                    <InputSearch 
                        placeholder='Filter'
                        // onChange={this.handleChangeFilter(foodData)}
                        />,
                    <SearchDropDown places={sortList} text='sort'/>
                ]
            } else {
               show= [
                    
                    <SearchDropDown places={cities} text='Select your city' />,
                    <SearchDropDown places={locations} text='Select location' />,
                    <ButtonSearch text='Find Food' onClick={this.handleClick} />,
                    
                ]
            }

        return (
            <div className="search-container">
                {show}
            </div>)
    }
}

export default SearchBar;
