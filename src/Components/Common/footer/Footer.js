import React,{Component} from 'react';


class Footer extends Component{
    render(){
        return(
            <div>
            <footer className="footer footer-fixed-bottom" id="contact-scroll">
            <div className="container" style={{paddingTop: '40px'}}>
                <div className="col col-xs-12 col-sm-3">
                    <div style={{float: 'left',width: '100%'}}>
                        <img className="logo-footer" src={require("../../../static/images/default/logo.png")}/>
                    </div>
                    <div style={{width:'100%',float:'left'}}>
                        <button className="btn-follow-us">Follow us</button>
                    </div>
                    <div className="follow" style={{width:'100%',float:'left'}}>
                        <a href="" target="_blank"><i style={{color:'#4267b2'}} className="fa fa-facebook-official"></i></a>
                        <a href="/" target="_blank"><i style={{color:'#de4d42'}} className="fa fa-google-plus-square"></i></a>
                        <a href="/" target="_blank"><i style={{color:'#3fa9f0'}} className="fa fa-skype"></i></a>
                    </div>
                </div>
                <div className="col col-xs-12 col-sm-6">
                    <p></p><p><span style={{fontSize:'14px'}}>
                    <span style={{fontFamily:'arial,helvetica,sans-serif'}}>
                    <strong>Công ty Cổ phần Đầu tư và Phát triển Koolsoft
                    <br/>
                    <br/>
        Email: </strong>info.hocthongminh@gmail.com<br/>
        <strong>Địa chỉ:</strong> Số 5B N2&nbsp;TT5, KĐT Bắc Linh Đàm, Phường Đại Kim, Quận Hoàng Mai, TP Hà Nội<br/>
        <strong>Hotline: </strong>Mr. Hoàng Anh 0166.6040.322</span></span></p>
        <p></p>
                </div>
            </div>
        </footer>
        </div>
     )
}
}

export default Footer;