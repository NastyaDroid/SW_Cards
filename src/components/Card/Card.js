import React from 'react';
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
    render() {
        const { hero, onClick } = this.props;
        return (
            <div className='card'>
                <h3>{hero.name}</h3>
                <ul className='card__info'>
                    <li className='card__info-item'>Height: {hero.height}</li>
                    <li className='card__info-item'>Mass: {hero.mass}</li>
                    <li className='card__info-item'>Hair color: {hero.hair_color}</li>
                    <li className='card__info-item'>Skin color: {hero.skin_color}</li>
                    <li className='card__info-item'>Eye color: {hero.eye_color}</li>
                    <li className='card__info-item'>Birth: {hero.birth_year}</li>
                    <li className='card__info-item'>Gender: {hero.gender}</li>
                    <li className='card__info-item'>Species: {hero.species}</li>
                    <li><Link to={`/${hero.name}`}>Show more info</Link></li>
                </ul>
                <button
                    className='card__btn' 
                    onClick={onClick}>
                    Add to Favorite
                </button>
            </div>
        )
    }
}

