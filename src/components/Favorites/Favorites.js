import React from 'react';
import { Link } from 'react-router-dom';

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  
  

  
  render() {
    const { favorites, onClick, onRemove } = this.props;
    return (
      <div>
        <button onClick={onClick}>Sort</button>
        <ul>
          {favorites.map(hero => {
            return (
              <li key={hero.name}>
                <div className="userInfo">
                  <p>
                    {hero.name}
                  </p>
                  <button onClick={()=>onRemove(hero)}>Remove</button>
                  <Link to={`/${hero.name}`}>Show more info</Link>
                </div>
              </li>
            );
          })}
        </ul>
        <button onClick={onClick}><Link to="/">back to Gallery</Link></button>
      </div>
    );
  }
}