import React,{Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';

const options = {
    items: 1,
	dots: true,
    autoplay: true
};

class SlideProAll extends Component{
    render(){
        return(
			<div className = "slide">
			
		<OwlCarousel  ref="car" options = {options}>
		<div><img src={require("../../../static/images/home/banner1.jpg")}alt="The Last of us"/></div>
		<div><img src={require("../../../static/images/home/banner2.jpg")} alt="GTA V"/></div>
		<div><img src={require("../../../static/images/home/banner3.jpg")} alt="Mirror Edge"/></div>
		</OwlCarousel>
		
	</div>
     )
}
}

export default SlideProAll;
