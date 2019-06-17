import React, {Component} from 'react';

export default class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            palindrome: '',
        }
    }

    handleChange(value) {
        this.setState({userInput: value})
    }

    check(userInput) {
        let forwards = userInput;
        let backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse('');
        backwards = backwards.join('');

        if(forwards === backwards) {
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }
    }


    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.check(this.state.userInput)}>Palindrome</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}