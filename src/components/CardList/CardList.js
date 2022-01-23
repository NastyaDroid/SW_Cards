import React from 'react';
import Card from '../Card/Card';

export default class CardList extends React.Component {
    
    render() {
        const { onAdd } = this.props;
        return (
            <div className='card-list'>
        {
            this.props.cardList.map((card) => {
                return (
                    
                    <Card 
                    key={card.created} 
                    hero={card} 
                    onAdd={()=> onAdd(card)}
                     />
                )})
        }
        </div>
        )
    }
}
