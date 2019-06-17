import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            food: ['pizza', 'noodles', 'salad', 'ice cream'],

            userInput: '',
            filteredFood: [],
        }
    }
    
    handleChange(value) {
        this.setState({userInput: value})
    }
    
    filter(userInput) {
        let food = this.state.food;
        let filteredFood = [];

        for(let i=0; i < food.length; i++) {
            if(food[i].startsWith(userInput)) {
                filteredFood.push(food[i]);
            }
        }
        this.setState({filteredFood: filteredFood});
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className='puzzleText'>Food: {JSON.stringify(this.state.food, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filter(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered food: {JSON.stringify(this.state.filteredFood, null, 10)}</span>
            </div>
        )
    }
}