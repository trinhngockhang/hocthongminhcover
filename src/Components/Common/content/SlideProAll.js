import React,{Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';


class SlideProAll extends Component{
    render(){
        return(
			<div>
			<div id="first-slide-banner" className="owl-carousel owl-theme" style={{opacity: '1', display: 'block'}}>
			<div className="owl-wrapper-outer"><div className="owl-wrapper" style={{width: '7974px', left: '0px', display: 'block', transition: 'all 800ms ease'}}><div className="owl-item" style={{width: '1329p'}}><div className="item" onclick="window.open('/banner/' + 'sale-off' +'&amp;forceweb')">
				<img className="width-img" src={require("../../../static/images/home/banner1.jpg")}/>
			</div></div><div className="owl-item" style={{width: '1329px'}}><div className="item" onclick="window.open('/banner/' + 'huong-dan-thanh-toan-khoa-hoc' +'&amp;forceweb')">
				<img className="width-img" src={require("../../../static/images/home/banner2.jpg")}/>
			</div></div><div className="owl-item" style={{width: '1329px'}}><div className="item" onclick="window.open('/banner/' + 'eleaning' +'&amp;forceweb')">
				<img className="width-img" src={require("../../../static/images/home/banner3.jpg")}/>
			</div></div></div></div>
		<div className="owl-controls clickable"><div className="owl-pagination"><div className="owl-page"><span className=""></span></div><div className="owl-page"><span className=""></span></div><div className="owl-page active"><span className=""></span></div></div></div></div>
	</div>
     )
}
}

export default SlideProAll;
