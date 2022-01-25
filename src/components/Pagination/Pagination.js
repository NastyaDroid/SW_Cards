import React from 'react';
import './Pagination.css'

export default class Pagination extends React.Component {

    render() {
        const { onClick, totalRecords } = this.props;
        const pageLimit = 10;
        const totalPages = Math.ceil(totalRecords.count / pageLimit)
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        };

        return (
            <div className='main__pagination'>
                {pages.map((elem) => {
                    return (
                        <button 
                            className='main__btn'
                            key={elem}
                            onClick={onClick}
                            value={elem}
                        >
                            {elem}
                        </button>
                    )
                })}
            </div>
        )
    }
}
