import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props) {
  //super refers to parent
  super(props);
  this.state = {
    searchText: '',
  }
  //handles binding
  this.handleSearchClick = this.handleSearchClick.bind(this);
}

handleInputChange(event){
  this.setState({
    searchText: event.target.value,
  });
}
//function for button
handleSearchClick () {
  console.log('button was clicked!');
  console.log('search value was ' + this.state.searchText);
  
}

  render() {
    return (
      <div>
      <input value={this.state.searchText} onChange= {event => this.handleInputChange(event)}placeholder="search for a movie title"/>
      <button onClick={this.handleSearchClick}>Search</button>
      </div>
    );
  }
}

export default App;
