import React from 'react';

export default function Resume() {
  return (
    <div className="main-container">
      <section className="bgimage">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-5">
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper">
        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 mb-5">
          <h1 className="title">Resume</h1>
          <div className="row justify-content-center" id="resume">
            <div className="mt-5 pl-5 pr-5">
              <p>
                Download my <a href="https://github.com/Shelbyrp/react-portfolio/blob/main/src/assets/Shelby%20Pignat%20CV%20WD%202021.pdf?raw=true" className="link">resume.</a>
              </p>
            </div>
          </div>
          <div className="justify-content-center mt-5">
            <div>
              <h2>Front-end Experience</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="mt-5">
              <h2>Back-end Experience</h2>
              <ul>
                <li>API</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>Templating (Handlebars)</li>
                <li>RESTful</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}