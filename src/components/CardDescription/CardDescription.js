import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import DataContainer from './FilmContainer';


export default class CardDescription extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        description: [],
        films: []

    }
    this.getData = this.getData.bind(this);
}   

getData (arr) {
        axios.get(arr)
        .then(json =>  {
            this.setState({
                films: json.data
            })    
        })
    }

    componentDidMount(){
        axios.get(`https://swapi.dev/api/films/2/`)
        .then(json =>  {
            this.setState({
                films: json.data
            })    
        })
     
    }
    
    render() {
        const generateKey = (pre) => {
            return `${ pre }_${ new Date().getTime() }`;
        }
        const {description, films, onClick  } = this.props;
        const desc = this.props.match.params.name;
        const res = this.props.description.filter((item) => item.name === desc);
        const film = res.map((item)=> item.vehicles)
        return(
            <div>
                {res.map((item) => {
                    return (
                        <div key={item.created}>
                        <h3>{item.name}</h3>
                        <ul className='card__info'>
                            <li className='card__info-item'>Height: {item.height}</li>
                            <li className='card__info-item'>Mass: {item.mass}</li>
                            <li className='card__info-item'>Hair color: {item.hair_color}</li>
                            <li className='card__info-item'>Skin color: {item.skin_color}</li>
                            <li className='card__info-item'>Eye color: {item.eye_color}</li>
                            <li className='card__info-item'>Birth: {item.birth_year}</li>
                            <li className='card__info-item'>Gender: {item.gender}</li>
                            <li className='card__info-item'>Films: {
                                item.films.map(film => (
                                    <DataContainer key={generateKey(film)} url={film}>
                                        {({loading, data}) => loading ? (
                                            <p>Loading film...</p>
                                        ) : (
                                            <p>{data.title}</p>
                                        )}
                                    </DataContainer>
                                ))
                            }
                            </li>
                            <li className='card__info-item'>Vehicles: {
                                item.vehicles.map(vehicle => (
                                    <DataContainer url={vehicle} key={generateKey(vehicle)}>
                                        {
                                        ({loading, data}) => loading ? (
                                            <p>Loading vehicle...</p>
                                        ) : (
                                            <p>{data.name}</p>
                                        )}
                                    </DataContainer>
                                ))
                            }
                            </li>
                             <li className='card__info-item'>Species: {
                                item.species.map(species => (
                                    <DataContainer url={species} key={generateKey(species)}>
                                        {({loading, data}) => loading ? (
                                            <p>Loading species...</p>
                                        ) : (
                                            <p>{data.name}</p>
                                        )}
                                    </DataContainer>
                                ))
                            }
                            </li>
                            <li className='card__info-item'>Starships: {
                                item.starships.map(starship => (
                                    <DataContainer url={starship} key={generateKey(starship)}>
                                        {({loading, data}) => loading ? (
                                            <p>Loading starship...</p>
                                        ) : (
                                            <p>{data.name}</p>
                                        )}
                                    </DataContainer>
                                ))
                            }
                            </li>
                        </ul>
                        <button onClick={onClick}><Link to="/">back to Gallery</Link></button>
                        </div>
                )})}
            </div>

        )
    }

}
// {this.props.match.params.name}
