import React from 'react';
import Card from './Card';
import Data from '../Data';

function Main() {

    const allCards = Data.map(item => {
        return (
            <Card  
            key={item.id}
            {...item}
            />
        )
    })

    return (
        <>
            <div className="main">
                {allCards}
            </div>
        </>
    )
};

export default Main
