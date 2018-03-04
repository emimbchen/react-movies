import React, { Component } from 'react';
import './App.css';

const movieList = [
  {
    title: 'Star Wars: A New Hope',
    url: 'https://images-na.ssl-images-amazon.com/images/I/91GAgvnO3AL._RI_.jpg',
  },
  {
    title: 'Star Wars: Return of the Jedi',
    url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/220px-ReturnOfTheJediPoster1983.jpg',
  },
  {
    title: 'The Holiday',
    url: 'https://upload.wikimedia.org/wikipedia/en/6/60/Theholidayposter.jpg',
  }
];

class App extends Component {
  constructor(props) {
    //super refers to parent
    super(props);
    this.state = {
      searchText: '',
      currentList: movieList,
    }
    //handles binding
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }
  //function for button
  handleSearchClick() {
    console.log('Search value was ' + this.state.searchText);
    //filter is es6 if movie is true, shows up
    this.setState({
      currentList: movieList.filter((movie) => {
        return movie.title.includes(this.state.searchText)
      })
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.searchText} onChange={event => this.handleInputChange(event)} placeholder="search for a movie title" />
        <button onClick={this.handleSearchClick}>Search</button>
        {
          this.state.currentList.map(movie => {
            return <img key={movie.title} src={movie.url} width="200px" />
          })
        }
      </div>
    );
  }
}

export default App;
