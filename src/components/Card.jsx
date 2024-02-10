import React from 'react';

function Card(props) {
    return (
        <>
            <div className="card">
                <div className="card--image-container">
                    <img src={`./images/${props.image}`} alt={props.title} className='card--image' draggable='false'/>
                </div>

                <div className="card--details">
                    <div className="card--location">
                        <i className="fa-solid fa-location-dot card--location-symbol"></i>
                        <div className="card--location-name">{props.location}</div>
                        <a href={props.map} className="card--location-view" target='_blank'>View on Google Maps</a>
                    </div>

                    <h1 className="card--title">{props.title}</h1>

                    <p className="card--journey-dates">{props.date}</p>

                    <p className="card--journey-desc">{props.description}</p>
                </div>


            </div>
        </>
    )
};

export default Card