import React, { Component } from 'react';
import Header from "../layout/Header";
import Section1 from '../layout/Section1';
import Openpositions from '../layout/Openpositions';
import Footer from '../layout/Footer';
import './Homepage.css';

class Homepage extends Component {
    state = {  } 
    render() { 
        return (
            <div id="homepageContainer">
            <Header />
            <Section1 />
            <Openpositions />
            <Footer />
            </div>
        );
    }
}
 
export default Homepage;