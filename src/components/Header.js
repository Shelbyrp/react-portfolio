import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from "react-router-dom";
import NavMenu from '../components/NavMenu';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Portfolio from '../components/pages/Portfolio';
import Resume from '../components/pages/Resume';

class Header extends Component {   
    render() {
    return (
        <HashRouter>
            <div className="row Header" id="header">
                <a href="https://jpd61.github.io/jpd-react-portfolio/"><img src="https://img.icons8.com/color/48/000000/astronaut.png" alt="Joseph DeWoody" class="icon" id="astro"/></a>
                <NavMenu/>
            </div>
    

    <div className="content">
          <Route exact path="/" render={() => (<Redirect to="/portfolio"/>)}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
        </div>
    </HashRouter>
    )
}
}

export default Header;