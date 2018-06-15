import React,{Component} from 'react';


class New extends Component{
    render(){
        return(
            <div className="row bg-news" id="news-scroll">
            <div className="title-main-color-white title-main">
                <div id ="new-white">TIN TỨC</div>
            </div>
            
            <div className="container">
                <div id="slider-news" style={{position: 'relative', opacity: '1', display: 'block'}} className="owl-carousel owl-theme">
                    
                        <div className="owl-wrapper-outer"><div className="owl-wrapper" style={{width: '1140px', left: '0px', display: 'block', transition: 'all 1000ms ease', transform: 'translate3d(0px, 0px, 0px)'}}>
                        <div className="owl-item" id="owl-mobile" >
                        <div className="item" style={{cursor: 'pointer'}} onclick="window.open('/tin-tuc/danh-sach-bo-sung-noi-dung-cua-hoc-thong-minh-trong-k-2-2018')">
                            <img src="http://storage.googleapis.com/kslearning/images/450687542-1527576887317-rectangle11copy.jpg"/>
                            <p className="news-name"><strong>Danh sách các môn học mới tháng 4/2018</strong></p>
                            <p className="des-time"><i className="fa fa-calendar"></i>11:50:53 28-03-2018</p>
                            <p className="des des-color-white dot-4">Trong kỳ 2 năm học 2017- 2018, Học thông minh sẽ bổ sung một số môn học mới cho các trường đại học Kinh tê quốc dân và Đại học Thương mại</p>
                        </div></div><div className="owl-item" id="owl-mobile2"><div className="item" style={{cursor: 'pointer'}} onclick="window.open('/tin-tuc/huong-dan-thanh-toan-cho-hoc-thong-minh')">
                            <img src="http://storage.googleapis.com/kslearning/images/807315495-1527577754035-3.png"/>
                            <p className="news-name"><strong>Hướng dẫn thanh toán</strong></p>
                            <p className="des-time"><i className="fa fa-calendar"></i>11:59:55 04-04-2018</p>
                            <p className="des des-color-white dot-4">Để mua khoá học, các bạn có thể thanh toán bằng 3 cách: Thanh toán trực tiếp, thanh toán qua ví Momo và chuyển khoản ngân hàng</p>
                        </div></div></div></div>				        
                <div className="owl-controls clickable" style={{display: 'none'}}><div className="owl-buttons"><div className="owl-prev"><i className="fa fa-chevron-left"></i></div><div className="owl-next"><i className="fa fa-chevron-right"></i></div></div></div></div>
 
            </div>
        </div>
     )
}
}

export default New;