import React, { Component } from 'react';

class Input extends React.Component {
    constructor() {
        super();

        this.state = {
            term: ""
        };

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event) {
        this.setState({ term: event.target.value });
    }

    handleSubmit() {
        console.log("Your input value is: " + this.state.term);
        this.props.onInputSubmit(this.state.term);
    }

    render() {
        return (
            <div class="input-group input-group-lg">
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={this.updateInput} />
                    <div class="input-group-prepend">
                    <input type="submit" class="input-group-text" id="inputGroup-sizing-lg" value="Search for recipes!" onClick={this.handleSubmit} />
                </div>
            </div>
        );
    }
}

export { Input };