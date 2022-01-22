import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <h1 className='header__title'>Star Wars Gallery</h1>
                <nav>
                    <Link to="/favorites" className='header__link'>Favorite</Link> 
                </nav>
            </header>
        )
    }
}