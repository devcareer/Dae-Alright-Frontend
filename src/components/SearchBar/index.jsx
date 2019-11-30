import React from 'react';
import './style.scss';
import SearchDropDown from './components/DropDown/index';
import ButtonSearch from './components/Button/index';
import InputSearch from './components/Input/index';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
               

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
    
    render() {
            const {cities, locations, isFindFood, sortList} = this.state;

            let show = [];
            if (isFindFood) {
                show= [
                    
                    <SearchDropDown places={cities} text='Select your city' />,
                    <SearchDropDown places={locations} text='Select location' />,
                    <ButtonSearch text='Find Food' onClick={this.handleClick} />,
                    <InputSearch 
                        placeholder='Search' 
                        />,
                    <InputSearch 
                        placeholder='Filter'
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
