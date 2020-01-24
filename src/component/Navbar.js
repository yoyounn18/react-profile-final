import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';
import './Main.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Navbar extends Component{
    scrollMoveHandler() {
        document.getElementById('nav').classList.add('opacity');
        document.getElementById('nav1').classList.add('opacity');
        document.getElementById('container').classList.add('mini');
    }
    goToScrollTop() {
        document.getElementById('nav').classList.remove('opacity');
        document.getElementById('nav1').classList.remove('opacity');
        document.getElementById('container').classList.remove('mini');
    }
    render() {
        window.addEventListener('scroll', event => {
            if(window.scrollY <= 1){
                this.goToScrollTop();
            } else {
                this.scrollMoveHandler();
            }
        });
        return(
            <div className="navbar-container" id="container">
                <div className="navbar-title global-font-eng" id = "nav">
                    KIMYOUNGJO
                </div>
                <div className="navbar-second-title global-font-eng" id = "nav1">
                    about me page.
                </div>
                <div className="navbar-content">
                    <AnchorLink href='#profile'>
                    <div className="navbar-content-items global-font-eng" >
                        PROFILE
                    </div>
                    </AnchorLink>
                    <AnchorLink href="#techstack">
                    <div className="navbar-content-items global-font-eng" >
                        TECHSTACK
                    </div>
                    </AnchorLink>
                    <AnchorLink href="#social">
                    <div className="navbar-content-items global-font-eng" >
                        SOCIAL
                    </div>
                    </AnchorLink>
                    <AnchorLink href="#project">
                    <div className="navbar-content-items global-font-eng" >
                        PROJECT
                    </div>
                    </AnchorLink>
                    <AnchorLink href="#contact">
                    <div className="navbar-content-items global-font-eng" >
                        CONTACT
                    </div>
                    </AnchorLink>
                </div>
            </div>
        );
    }
}
export default Navbar;

