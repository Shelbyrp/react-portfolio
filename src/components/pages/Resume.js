import React from 'react';

export default function Resume() {
  return (
    <div class="main-container">
      <section class="bgimage">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-5">
            </div>
          </div>
        </div>
      </section>
      <section class="wrapper">
        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 mb-5">
          <h1 class="title">Resume</h1>
          <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
              <p>
                Download my <a href="https://github.com/Shelbyrp/react-portfolio/blob/main/src/assets/Shelby%20Pignat%20CV%20WD%202021.pdf?raw=true" class="link">resume.</a>
              </p>
            </div>
          </div>
          <div class="justify-content-center mt-5">
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
            <div class="mt-5">
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