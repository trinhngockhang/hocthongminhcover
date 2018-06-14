import React,{Component} from 'react';
import {Data} from './Data';
class HotCourse extends Component{
    renderStar = (rate) => {
        var indents = [];
        if(rate == 0.5) {
             indents.push(<i className="fa fa-star-half-o" aria-hidden="true" style={{color: "#F6B05B"}}></i>)
             indents.push(<i className="fa fa-star" aria-hidden="true" style={{color: "#ddd"}}></i>)
             indents.push(<i className="fa fa-star" aria-hidden="true" style={{color: "#ddd"}}></i>)
             indents.push(<i className="fa fa-star" aria-hidden="true" style={{color: "#ddd"}}></i>)
             indents.push(<i className="fa fa-star" aria-hidden="true" style={{color: "#ddd"}}></i>)

        }
        else if(rate == 0) {
             indents.push(<i className="fa fa-star" aria-hidden="true" style={{color: "#ddd"}}></i>)
             indents.push(<i className="fa fa-star" aria-hidden="true" style={{color: "#ddd"}}></i>)
             indents.push(<i className="fa fa-star" aria-hidden="true" style={{color: "#ddd"}}></i>)
             indents.push(<i className="fa fa-star" aria-hidden="true" style={{color: "#ddd"}}></i>)
             indents.push(<i className="fa fa-star" aria-hidden="true" style={{color: "#ddd"}}></i>)
        } else {
            for (let index = 1; index <=5 ; index++) {        
                if(index <= rate && rate - index !== 0.5){
                   
                         indents.push(<i className="fa fa-star" ariaHidden="true" style={{color: '#F6B05B'}}></i>)
                    
                }else if(rate - index == 0.5){
                   
                        indents.push(<i className="fa fa-star-half-o" aria-hidden="true" style={{color: "#F6B05B"}}></i>)
                    
                }else{
                    
                        indents.push(<i className="fa fa-star" aria-hidden="true" style={{color: "#ddd"}}></i>)
                    
                }
            }
        }
       
        return indents;
    }
    
    render(){
        var that = this;
        console.log(this.renderStar(4));
        return(
            <div className="container hot-course" id="course-scroll">
		    <div className="title-main">
			    <div>KHOÁ HỌC NỔI BẬT</div>
		    </div>
		<div className="des">Đa dạng các khoá học cho bạn lựa chọn. Giúp việc học trở nên dễ dàng hơn</div>
        
        <div className = "classNamees-panel row" id ="panel-course" style={{marginTop:'15px'}} >
            {
            Data.map(function(object,index){
            return    <div className="col col-xs-12 col-sm-4 col-md-3 col-lg-3 course-items page-course-1  active">
                        <div className="content-course" >
                            <div className="header-classes">
                                <img className="img_" src={object.img}/>
                                <div className="header-hover-classes">
                                    <div className="panelButtonClass">
                                        <div style={{width:'49%',display:'inline-block',verticalAlign:'middle'}}>
                                            <button className="btn-view-details" data-id="5738458366607360" onclick="gotoUrl(this)">Xem chi tiết
                                            </button></div>
                                            <div style={{width:'49%',display:'inline-block',verticalAlign:'middle'}}>
                                            <button className="btn-buy-now" onclick="gotoUrlEnroll(this)">Mua ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-classes">
                                <div style={{display: '-webkit-box'}}> 
                                    <p className="name-course dot-1" title={object.name}>{object.name}</p>
                                </div>
                                <div style={{overflow: 'hidden'}}>
                                    <div style={{display: 'inline-block',width: '35%', verticalAlign: 'top'}}>
                                    <p className="money-course">{object.price}</p>
                                    </div>
                                    <div style={{display: 'inline-block', width: '64%'}}>
                                     <img className="img-persion-num" src={require('../../../static/images/default/member-01.png')}/>
                                    <p className="text-persion-num" style={{display: 'inline-block'}}>{object.users}</p>
                                    <p className="star-count" style={{display: 'inline-block',float: 'right', paddingTop: '4px'}}>
                                       
                                    {  that.renderStar(object.rate) }
                                 
                                       
                                    </p>
                                    </div>
                                    <p className="des-course dot-3" title={object.description}>{object.description}</p>
                        <hr style={{margin: '10px 0',display:'none'}}/>
                        <div className="info-user-course" style={{display:'none'}}>
                        <img className="avatar" src={require('../../../static/images/home/default_avatar.jpg')}/>
                        <strong className="name">Create By Nguyễn Như Hoàng Anh</strong>
                        <img className="img-persion-num" src="resources/images/member-01.png"/>
                        <strong className="text-persion-num">0</strong>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
            })
          }

        </div>   

		<div className="row">
            <button style={{margin: '30px auto !important',display: 'block',marginTop: '10px !important'}} 
            className="show-more" >Xem tất cả khoá học</button>
		</div>
	</div>
     )
}
}

export default HotCourse;