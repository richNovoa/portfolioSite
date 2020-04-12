import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <a href="#" className="logo">Richard Novoa</a>
                <a href="#" className="navlink 1">About</a>
                <a href="#" className="navlink 2">Resume</a>
            </div>
          );
    };
};

export default Navbar;