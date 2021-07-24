import React from 'react';
import ProjectCards from './Projects'
import portfolio from '../../components/projects.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {

    return (
        <div>
            <section class="bgimage">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-5">
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="project">
                    <h1 className="title">Shelby Pignat Portfolio</h1>
                    <hr></hr>
                </div>

                <Wrapper id="card-data">
                    {portfolio.map((project) => (
                        <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} />
                    ))}
                </Wrapper>
            </section>
        </div>
    );
}

export default Portfolio;
