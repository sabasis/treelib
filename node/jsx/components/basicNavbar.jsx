import React, { PropTypes } from 'react'

class BasicNavbar extends React.Component {
    func(){
         this.props.handler('search');
    }
    render() {
        return (
            <div className="basicNavbar">
                <ul>
                    <li className="treelib"><a href="/"><img src="/img/logo.png"></img><label>TreeLib</label></a></li>
                    <li className="home"><a href="/">HOME</a></li>
                    <li className="search"><a href="/search">SEARCH</a></li>
                    <li className="about"><a href="/about">ABOUT</a></li>
                    <li className="contact"><a href="/contact">CONTACT</a></li>
                </ul>
                <div className="navBorder first"></div><div className="navBorder second"></div><div className="navBorder third"></div>
            </div>
        );
    }
}

export default BasicNavbar