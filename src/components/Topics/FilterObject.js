import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor(){
        super()
        this.state = {
            animals: [
                {
                    name: 'Sally',
                    type: 'dog'    
                },
                {
                    name: 'Cookie',
                    type: 'cat'    
                },
                {
                    name: 'Swimmy',
                    type: 'fish',
                    age: 5
                }
            ],

            userInput: '',
            filteredAnimals: [],
        }
    }

    handleChange(value) {
        this.setState({userInput: value})
    }
    filter(prop) {
        let animals = this.state.animals;
        let filteredAnimals = [];

        for(let i=0; i < animals.length; i++) {
            if(animals[i].hasOwnProperty(prop)) {
                filteredAnimals.push(animals[i]);
            }
        }
        this.setState({filteredAnimals: filteredAnimals});
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Unfiltered array: {JSON.stringify(this.state.animals, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filter(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered array: {JSON.stringify(this.state.filteredAnimals, null, 10)}</span>
            </div>

        )
    }
}