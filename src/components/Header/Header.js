import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <header className='main__header header'>
                <Link className='main__link' to="/">
                    <h1 className='header__title'>
                        Star Wars Gallery
                    </h1>
                </Link>
                <nav className='header__nav'>
                    <Link className='header__link main__link' to="/favorites" >
                        Favorite
                    </Link> 
                </nav>
            </header>
        )
    }
}