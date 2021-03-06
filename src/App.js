import React, { Component } from 'react';
import CardList from './components/CardList/CardList';
import Pagination from './components/Pagination/Pagination';
import Favorites from './components/Favorites/Favorites';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import './App.scss';
import CardDescription from './components/CardDescription/CardDescription';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      data: [],
      loading: false,
      currentHeroes: [],
      favorites: []
    }

    this.btnClick = this.btnClick.bind(this);
  }

  sortNames = (firstName, secondName) => {
    if (firstName.name < secondName.name) {
      return -1;
    }
    if (firstName.name > secondName.name) {
      return 1;
    }
    return 0;
  }

  sortList = () => {
    const { favorites } = this.state;
    console.log(this.state.favorites)
    console.log(favorites.sort(this.sortNames))
    this.setState({
      favorites: this.state.favorites.sort()
    })
  }

  onAdd = (favorite) => {
    const { favorites } = this.state;
    if (!favorites.some(alreadyFavorite => alreadyFavorite.name === favorite.name)) {
      alert('Hero added');
      this.setState({
        favorites: [...this.state.favorites, favorite]
      });
    }
  }

  onRemove = (favorite) => {
    this.setState(state => ({
      favorites: state.favorites.filter(elem => elem.name !== favorite.name)
    }));
  }

  getData = () => {
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
    const { data, favorites, currentPage } = this.state;
    if (this.state.loading) {
      return (
        <p>Loading...</p>
      )
    }

    return (
      <Router>
        {/* <div className='main'> */}
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <div className='main__container'>
                  <CardList
                    cardList={this.state.currentHeroes}
                    onAdd={this.onAdd}
                  />
                  <Pagination
                    totalRecords={data}
                    key={currentPage}
                    onClick={this.btnClick} />
                </div>
              )}
            />
            <Route
              path="/favorites"
              render={() =>
                <Favorites
                  favorites={favorites}
                  onSort={this.sortList}
                  onRemove={this.onRemove} />}
            />
          </Switch>
          <Route
            path="/:name"
            render={(props) =>
              <CardDescription
                {...props}
                description={this.state.currentHeroes}
                favorites={favorites} />
            }
          />
        {/* </div> */}
      </Router>
    )
  }
}