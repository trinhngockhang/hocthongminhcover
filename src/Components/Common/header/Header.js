import React,{Component} from 'react';

class Header extends Component{
    render(){
        return(
        <div>
            <nav className="navbar navbar-default navbar-fixed-top" id = "navbar-default">
		<div style={{borderBottom: "1px solid #ddd",width:'100%'}}>
			<div className="container">
				<div className="row navbar-first">
					<div className="col col-xs-12 col-sm-4">
						
							<div className="hotline">HOTLINE: 0166.6040.322</div>
						
						<div className="follow">
							THEO DÕI MXH: 
							
								<a href="https://www.facebook.com/onthiquade/" target="_blank"><i style={{color:'#4267b2'}} className="fa fa-facebook-official"></i></a>
							
							<a href="/" target="_blank"><i style={{color:'#de4d42'}} className="fa fa-google-plus-square"></i></a>
							<a href="/" target="_blank"><i style={{color:'#3fa9f0"'}} className="fa fa-skype"></i></a>
						</div>
					</div>
					<div className="col col-xs-4 col-sm-4">
						<input id="search-panel" className="form-control" type="text" placeholder="Tìm kiếm khoá học" />
					</div>
					<div className="col col-xs-12 col-sm-4">
						<div className="login-pos-panel">
							<div id="loginPanelclassName"><table cellSpacing="0" cellPadding="0">
                            <tbody>
                                <tr>
                                    <td align="left" style={{verticalAlign: 'top'}}>
                                    <div>
                                        <table cellSpacing="0" cellPadding="0" >
                                        <tbody>
                                            <tr>
                                                <td align="left" style={{verticalAlign: 'middle'}}>
                                                <button type="button" className="button-login-main">Đăng nhập</button>
                                                </td>
                                                <td align="left" style={{verticalAlign: 'middle'}}>
                                                <button type="button" className="button-login-main">Đăng ký</button>
                                                </td>
                                                </tr>
                                                </tbody>
                                                </table> 
                                                <div className="dropdown loginRootDropdown-hocthongminh" tabIndex="0" aria-hidden="true" style={{outline: 'none', display: 'none'}}>
                                                <a className="btn dropdown-toggle logindropdown" data-toggle="dropdown" style={{backgroundColor:'transparent'}}> 
                                                <table cellSpacing="0" cellPadding="0">
                                                <tbody>
                                                    <tr>
                                                        <td align="left" width="45px" style={{verticalAlign: 'middle'}}>
                                                        <table cellSpacing="0" cellPadding="0" className="imageAvatar" style={{borderRadius: '100%', position: 'relative', cursor: 'pointer'}}>
                                                        <tbody>
                                                            <tr>
                                                                <td align="center" style={{verticalAlign: 'middle'}}>
                                                                <img className="gwt-Image" aria-hidden="true" style={{display: 'none', width: '35px', height: '35px', borderRadius: '100%'}}/></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style={{verticalAlign: 'middle'}}>
                                                                    <img src={require('../../../static/images/home/default_avatar.jpg')} className="gwt-Image" style={{width: '35px', height: '35px', borderRadius: '100%'}}/>
                                                                    </td></tr><tr><td align="center" style={{verticalAlign: 'middle'}}>
                                                                    <div className="gwt-HTML btn-link" style={{cursor: 'pointer', fontSize: '12px'}}>
                                                                    </div></td></tr></tbody></table></td><td align="left" style={{verticalAlign: 'middle'}}><div><div className="gwt-HTML name-user dot-1" style={{color: 'black', fontSize: '14px'}}>Đăng nhập</div><div className="KJB"></div></div></td></tr></tbody></table> </a> <ul className="dropdown-menu" id="xxxx_dropdown-menu" style={{padding: '0px', zIndex: '999999999'}}> <div className="LJB"></div> <div className="LJB"></div> <div className="LJB"></div> <div className="LJB"></div> <div className="LJB"></div> <div className="LJB"></div> <div className="LJB"></div> <div className="LJB"></div> <div className="LJB"></div> <div className="LJB"></div> <div className="LJB"></div> <div className="LJB JJB"></div> </ul></div></div></td></tr></tbody></table></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="container">
			<div className="navbar-header">
				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="true" aria-controls="navbar">
						<span className="sr-only">Toggle navigation</span> 
						<span className="icon-bar"></span> 
						<span className="icon-bar"></span> 
						<span className="icon-bar"></span>
				</button>
				<a href="/"><img className="logo-main" src={require('../../../static/images/default/logo.png')}/></a>
			</div>
			<div id="navbar" className="navbar-collapse collapse" aria-expanded="false">
				<ul className="nav navbar-nav navbar-nav-list-header" id="menuright">
					<li className=""><a href="#" onclick="scrollToElement('html, body', '#first-slide-banner', 60);">TRANG CHỦ</a></li>
					<li><a href="#course" onclick="scrollToElement('html, body', '#course-scroll', 0);">KHOÁ HỌC</a></li>
					
						<li><a href="http://www.hocthongminh.com/banner/huong-dan-thanh-toan-khoa-hoc&amp;forceweb" target="_blank">MUA KHOÁ HỌC</a></li>
					
					<li><a href="#feedback-scroll" onclick="scrollToElement('html, body', '#feedback-scroll', 150);">PHẢN HỒI</a></li>
					<li><a href="#news-scroll" onclick="scrollToElement('html, body', '#news-scroll', 60);">TIN TỨC</a></li>
					<li className=""><a href="#contact-scroll" onclick="scrollToElement('html, body', '#contact-scroll', 60);">LIÊN HỆ</a></li>
				</ul>
			</div>
		</div>
	</nav>
        </div>
     )
}
}

export default Header; 