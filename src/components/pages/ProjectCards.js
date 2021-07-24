import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectCards(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <p className="project-title" id="card-title">{props.name}</p>
                <p>
                    <a href={props.github}>Github Respository</a>
                </p>
                <p>
                    <a href={props.deploy}>Deployed Application</a>
                </p>
            </div>
        </div>
    );
}

export default ProjectCards;