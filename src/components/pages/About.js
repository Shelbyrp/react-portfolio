import React from 'react';
import Profile from "../../assets/ShelbyProfile.png"

export default function About() {
    return (
        <div className="about-container">

            <div>
                <article>
                    <span id="About-Me"></span>
                    <div class="container mt-5">
                        <div class="row p-5">
                            <div class="col-sm-3 col-md-2">
                                <img src={Profile} alt="about me" className="profile"></img>
                            </div>
                            <div class="col-sm-8 offset-sm-1 col-md-9 offset-md-1">
                                <p id="intro">
                                    Hi I'm <strong class="pink">Shelby Pignat</strong>!

                    </p>
                                <p>
                                    With a background in digital marketing across a range of industries including construction,
                                    tourism and property development, I can now add that I am a Full Stack Web Developer to the
                                    list having recently completed a course through the University of Western Australia. This is
                                    in
                                    addition to the Bachelor of Commerce Degree that I hold from the University of Western
                                    Australia. My current
                                    role as a Digital Marketing Coordinator has sparked my interest in programming languages and
                                    the
                                    power of
                        coding.<br /> <br /> Learning how to code is a skill that I believe everyone should have the
                        priviledge to do.
                        View some of my recent work below and feel free to contact me with any queries.
                    </p>
                            </div>
                        </div>
                    </div>
                </article>
                <div className="card-body contactLinks">
                    <a href="https://www.linkedin.com/in/shelby-pignat-08795293/" className="card-link">LinkedIn</a>
                    <a href="https://github.com/Shelbyrp" className="card-link">GitHub</a>
                </div>
            </div>
        </div>
    );
}
