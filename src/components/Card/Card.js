import React from 'react';
import './Card.scss'
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
    render() {
        const { hero, onAdd } = this.props;
        return (
            <div className='card'>
                <h3 className='card__title'>{hero.name}</h3>
                <ul className='main__list'>
                    <li>Height: {hero.height}</li>
                    <li>Mass: {hero.mass}</li>
                    <li>Hair color: {hero.hair_color}</li>
                    <li>Skin color: {hero.skin_color}</li>
                    <li>Eye color: {hero.eye_color}</li>
                    <li>Birth: {hero.birth_year}</li>
                    <li>Gender: {hero.gender}</li>
                </ul>
                <Link 
                    className="card__link main__link" 
                    to={`/${hero.name}`} >
                    Show more info
                </Link>
                <button
                    className='card__btn main__btn'
                    onClick={onAdd}>
                    Add to Favorite
                </button>
            </div>
        )
    }
}