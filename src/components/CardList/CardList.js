import React from 'react';
import Card from '../Card/Card';

export default class CardList extends React.Component {
    // static defaultProps = {
    //     cardList: []
    // }
    render() {
        return (
            <div className='card-list'>
        {
            this.props.cardList.map((card) => {
                return (
                    <Card key={card.created} hero={card} onClick={()=> this.props.onClick(card)} />
                )})
        }
        </div>
        )
    }
}
