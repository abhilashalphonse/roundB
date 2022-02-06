import React, { Component } from 'react';
import './Section1.css';
import { fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


class Section1 extends Component {

    render() { 
        const styles = {
            fadeInDown: {
              animation: 'x 1s',
              animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
            }
          }
        return (
            <div class="bannerWrapper">
                <StyleRoot>
                <h1 style={styles.fadeInDown}>Technology</h1>
                </StyleRoot>
                <div class="bannerContentWrapper">
                 <p class="bannerContent">Business lives here</p>
                 <div class="bannerButtonsWrapper">
                     <button id="bannerButton">Contact</button>
                     <button id="bannerButton">Services</button>
                 </div>
                </div>
                
                
            </div>
        );
    }
}
 
export default Section1;