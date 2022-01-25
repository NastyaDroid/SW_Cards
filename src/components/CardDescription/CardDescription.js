import React from 'react';
import './CardDescription.scss';
import { Link } from 'react-router-dom';
import DataContainer from '../DataContainer/DataContainer';


export default class cardDescription extends React.Component {
 
    render() {
        const generateKey = (pre) => {
            return `${pre}_${new Date().getTime()}`;
        };
        const { description, favorites } = this.props;
        const desc = this.props.match.params.name;
        let res = description.filter((item) => item.name === desc);
        if (res.length === 0) {
            res = favorites.filter((item) => item.name === desc);
        }
        return (
            <>
                {res.map((item) => {
                    return (
                        <div className='main__container'>
                        <section className='card-description' key={item.created}>
                            <h3 className='card-description__title'>{item.name}</h3>
                            <ul className='main__list'>
                                <li>Height: {item.height}</li>
                                <li>Mass: {item.mass}</li>
                                <li>Hair color: {item.hair_color}</li>
                                <li>Skin color: {item.skin_color}</li>
                                <li>Eye color: {item.eye_color}</li>
                                <li>Birth: {item.birth_year}</li>
                                <li>Gender: {item.gender}</li>
                                <li className='card-description__info-item'>Films: {
                                    item.films.map(film => (
                                        <DataContainer key={generateKey(film)} url={film}>
                                            {({ loading, data }) => loading ? (
                                                <p>Loading film...</p>
                                            ) : (
                                                <p>{data.title}</p>
                                            )}
                                        </DataContainer>
                                    ))
                                }
                                </li>
                                <li className='card-description__info-item'>Vehicles: {
                                    item.vehicles.map(vehicle => (
                                        <DataContainer url={vehicle} key={generateKey(vehicle)}>
                                            {
                                                ({ loading, data }) => loading ? (
                                                    <p>Loading vehicle...</p>
                                                ) : (
                                                    <p>{data.name}</p>
                                                )}
                                        </DataContainer>
                                    ))
                                }
                                </li>
                                <li className='card-description__info-item'>Species: {
                                    item.species.map(species => (
                                        <DataContainer url={species} key={generateKey(species)}>
                                            {({ loading, data }) => loading ? (
                                                <p>Loading species...</p>
                                            ) : (
                                                <p>{data.name}</p>
                                            )}
                                        </DataContainer>
                                    ))
                                }
                                </li>
                                <li className='card-description__info-item'>Starships: {
                                    item.starships.map(starship => (
                                        <DataContainer url={starship} key={generateKey(starship)}>
                                            {({ loading, data }) => loading ? (
                                                <p>Loading starship...</p>
                                            ) : (
                                                <p>{data.name}</p>
                                            )}
                                        </DataContainer>
                                    ))
                                }
                                </li>
                            </ul>
                            <Link className='card-description__link main__link' to="/">back to Gallery</Link>
                        </section>
                        </div>
                    )
                })}
            </>
        )
    }

}
