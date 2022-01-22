import React from 'react';

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
        const { totalRecords, heroesArray, pageLimit = 10 } = this.props;
        this.totalRecords = totalRecords;
        this.heroesArray = heroesArray;
        this.totalPages = Math.ceil(this.totalRecords.count / pageLimit)
    }

    render() {
        const pages = [];
        for (let i = 1; i <= this.totalPages; i++) {
            pages.push(i);
        }
        const { onClick } = this.props;
        return (
            <div>
                {pages.map((elem) => {
                    return (
                        <button
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
