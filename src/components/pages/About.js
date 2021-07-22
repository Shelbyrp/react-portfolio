import React from 'react';
import Profile from "../../assets/Profile.png"

export default function About() {
    return (
        <div className="about-container">
            <h5>About Me</h5>
            <img src={Profile} alt="about me" className="profile float-left"></img>
            <div>
                <div className="mt-3">
                    <p>   molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
                    magna a ultrices. Aenean pellentesque placerat lacus imperdiet
                    efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
                    mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
                    posuere, eget tristique dui dapibus. Maecenas fermentum elementum
                    faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidun</p>
                    <p>   molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
                    magna a ultrices. Aenean pellentesque placerat lacus imperdiet
                    efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
                    mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
                    posuere, eget tristique dui dapibus. Maecenas fermentum elementum
                    faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidun</p>
                </div>
                <div className="card-body contactLinks">
                    <a href="https://www.linkedin.com/in/shelby-pignat-08795293/" className="card-link">LinkedIn</a>
                    <a href="https://github.com/Shelbyrp" className="card-link">GitHub</a>
                </div>
            </div>
        </div>
    );
}
