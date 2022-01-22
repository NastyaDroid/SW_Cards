import React, { Component } from 'react';
import CardList from './components/CardList/CardList';
import Pagination from './components/Pagination/Pagination';
import Favorites from './components/Favorites/Favorites';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';
import CardDescription from './components/CardDescription/CardDescription';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      data: [],
      loading: false,
      currentHeroes: [],
      favorites: []
    }
    this.getData = this.getData.bind(this);
    this.btnClick = this.btnClick.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }

  addFavorite = (favorite) => {
    const { favorites } = this.state;
    if (!favorites.some(alreadyFavorite => alreadyFavorite.name === favorite.name)) {
      this.setState({
        favorites: [...this.state.favorites, favorite]
      });
  }
}


  getData() {
    const { currentPage } = this.state;
    this.setState({
      data: [],
      currentHeroes: [],
      loading: true
    })
    axios.get(`https://swapi.dev/api/people/?page=${currentPage}`)
      .then(json => {
        this.setState({
          data: json.data,
          loading: false,
          currentHeroes: json.data.results
        })
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  async btnClick(e) {
    const currentPage = e.target.value;
    await this.setState({
      currentPage
    })
    this.getData();
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { data } = this.state;
   
    if (this.state.loading) {
      return (
        <p>Loading...</p>
      )
    }

    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <div>
                <Header />
                <CardList cardList={this.state.currentHeroes}  onClick={this.addFavorite}/>
                <Pagination totalRecords={data} heroesArray={this.state.currentHeroes}
                  key={this.elem} onClick={this.btnClick} />
                  {/* onClick={this.addFavorite} */}
              </div>
            )}
          />
          <Route
            path="/favorites"
            render={() => <Favorites favorites={this.state.favorites} />}
          />
        </Switch>
              <Route 
              path="/:name"
              render={(props)=><CardDescription {...props} description={this.state.currentHeroes}/>}/>
      </Router>
    )
  }
}


export default App;
