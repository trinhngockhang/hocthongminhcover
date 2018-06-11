import FeaturePageUi from "../FeaturePage/FeaturePage";
import React, { Component}  from 'react'; 
import SlideProAll from '../../Common/content/SlideProAll';
import {handleScript} from '../../../static/js/handleScript';
import HotCourse from '../../Common/content/HotCourse';
export default class Home extends FeaturePageUi {
  
    componentDidMount(){
        var loadScript = function(src) {
            var tag = document.createElement('script');
            tag.async = false;
            tag.src = src;
            document.querySelector('body').appendChild(tag);
          }
         loadScript('./js/owl.carousel.min.js');
         loadScript('./js/owl.carousel.js');
    }
    showContent = () => {
        return (
            <div>
                <SlideProAll/>
                <HotCourse/>
            </div>
        )
    }
}