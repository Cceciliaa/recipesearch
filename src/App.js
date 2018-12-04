import React, { Component } from 'react';
import './App.css';
import Request from 'superagent';
import { ToggleButton } from 'react-bootstrap/lib';
import { ToggleButtonGroup } from 'react-bootstrap/lib';

import { Input } from './Components/Input'
import { List } from './Components/List'


class App extends Component {

  constructor() {
    super();
    this.state = {
      recipes: [],
      trending: false,
      rating: false,
      pfr: ''
    };
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.setPreference = this.setPreference.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.setState({ isChecked: this.props.isChecked });
  }

  handleInputSubmit(term) {
    console.log(term);
    console.log(this.state.recipes);
    const url = `https://www.food2fork.com/api/search?key=70ae256f3c84e274a0c7a276e2b9f6da&q=${encodeURIComponent(term)}&page=2&sort=${encodeURIComponent(this.state.pfr)}`;

    Request.get(url, (err, response) => {
      const parse = JSON.parse(response.text)
      console.log(parse)
      this.setState({ recipes: parse.recipes });
    });
  }


  setPreference() {
    if (this.state.rating && !this.state.trending) {
      this.setState({ pfr: "r" })
    } else if (this.state.trending && !this.state.rating) {
      this.setState({ pfr: "t" })
    } else {
      this.setState({ pfr: '' })
    }
    console.log(this.state.pfr)
    console.log(this.state.rating)
      console.log(this.state.trending)
  }

  onChange(evt) {
    const value = evt.target.value
    if (value === 't') {
      this.setState({ trending: evt.target.checked })
    } else if (value === 'r') {
      this.setState({ rating: evt.target.checked })
    }
      this.setPreference()
  }


  render() {
    return (
      <div className="App">
        <div class="jumbotron">
          <Input onInputSubmit={term => this.handleInputSubmit(term)} />
          <div className='toggle'>
            <ToggleButtonGroup type="checkbox">
              <ToggleButton value={'t'} onClick={this.onChange}>Trendingness</ToggleButton>
              <ToggleButton value={'r'} onChange={this.onChange}>Rating</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <List recipes={this.state.recipes} />
        </div>
      </div>
    );
  }
}

export default App;
