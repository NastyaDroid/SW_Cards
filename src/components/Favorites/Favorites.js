import React from 'react';
import './Favorites.scss';
import { Link } from 'react-router-dom';

export default class Favorites extends React.Component {
  
  render() {
    const { favorites, onSort, onRemove } = this.props;
    return (
      <section className='main__container favorites'>
        <button
          className='favorites__btn main__btn' 
          onClick={onSort}>
          Sort
        </button>
        <ul className='favorites__list main__list'>
          {favorites.map(hero => {
            return (
              <li key={hero.name}>
                <div className="favorites__list-info">
                  <h2>
                    {hero.name}
                  </h2>
                  <Link className='favorites__list-link main__link' to={`/${hero.name}`}>Show more info</Link>
                  <button className='favorites__list-btn main__btn' onClick={()=>onRemove(hero)}>Remove</button>
                </div>
              </li>
            );
          })}
        </ul>
        <Link className='favorites__link main__link' to="/">back to Gallery</Link>
      </section>
    );
  }
}