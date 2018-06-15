import React, { Component } from 'react';


class Login extends Component {
    render() {
        return (
            <div>
            <div className="modal fade modal-panel in" data-keyboard="true" tabIndex="-1" data-backdrop="true" id="myModal" style={{ display: 'none', paddingRight: '17px' }}>
                <div className="modal-dialog" >
                    <div className="modal-content">
                        <div className="modalContentBody">
                            <div className="scrollPanel" style={{ overflow: 'auto', position: 'relative', zoom: '1' }}>
                                <div style={{ position: 'relative', zoom: '1' }}>
                                    <div>
                                        <div className="NIB">
                                            <div className="col-xs-12 col-sm-12 col-md-4 JIB EJB">
                                                <div className="OIB">Đăng nhập</div>
                                                
                                                <div className="CJB" style={{ width: '100%' }}><input type="text" className="form-control GJB" placeholder="Tài khoản (*)" />
                                                    <input className="form-control GJB GIB" type="password" autocomplete="on" placeholder="Mật khẩu (*)" />
                                                    <div className="gwt-Label MIB"></div>
                                                </div>
                                                <table cellspacing="0" cellPadding="0" style={{ width: '100%' }}>
                                                    <tbody><tr>
                                                        <td align="left" style={{ verticalAlign: 'middle' }}>
                                                            <div className="cbMemberPass">
                                                                <label>
                                                                    <input type="checkbox" value="on" tabIndex="0" />
                                                                    <span> Nhớ mật khẩu</span>
                                                                </label></div></td><td align="left" style={{ verticalAlign: 'middle' }}>
                                                                <div className="HIB">Quên mật khẩu</div>
                                                                </td>
                                                                </tr>
                                                                </tbody>
                                                                </table>
                                                                <button type="button" className="buttonLoading" style={{ backgroundColor: 'rgb(76, 105, 151)', padding: '6px 60px', margin: '10px auto 0px', display: 'block', borderRadius: '25px', textTransform: 'uppercase' }}>
                                                               
                                                               
                                                                <div className="gwt-HTML buttonLoading-text">Đăng nhập</div>
                                                                
                                                                <div className="gwt-HTML buttonLoading-status"></div>
                                                                </button>
                                                                <br/>

                                                                <div className="col-xs-12 col-sm-12 col-md-6">
                                                                <div className="LIB" id ="fb-mobile">Đăng nhập Facebook</div> </div>
                                                                <br/>
                                                                <img className="PIB" src={require("../../../static/images/default/logo.png")} />
                                                                </div>
                                                                <div className="col-xs-12 col-sm-12 col-md-8 JIB">
                                                                <div className="OIB" style={{ marginLeft: '15px' }}>Đăng ký</div>
                                                                <div className="col-xs-12 col-sm-12 col-md-6">
                                                                    <input type="text" className="form-control GJB" placeholder="Tài khoản (*)" />
                                                                    <div className="gwt-HTML KIB" aria-hidden="true" style={{display: 'none'}}>Viết thường, không dấu cách và không có ký tự đặc biệt</div>
                                                                </div>
                                                                    <div className="col-xs-12 col-sm-12 col-md-6">
                                                                        <input type="text" className="form-control GJB" placeholder="Họ tên (*)" />
                                                                        </div>
                                                                            <div className="col-xs-12 col-sm-12 col-md-6">
                                                                            <input className="form-control GJB" type="password" autocomplete="on" placeholder="Mật khẩu (*)" /></div>
                                                                            <div className="col-xs-12 col-sm-12 col-md-6" aria-hidden="true" style={{display: 'none'}}>
                                                                                <select className="form-control GJB">
                                                                                <option value="0">Nam</option>
                                                                                <option value="1">Nữ</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col-xs-12 col-sm-12 col-md-6">
                                                                                <input type="text" className="form-control GJB" placeholder="Email (*)" />
                                                                                </div>
                                                                                <div className="col-xs-12 col-sm-12 col-md-6">
                                                                                <input className="form-control GJB" type="password" autocomplete="on" placeholder="Xác nhận mật khẩu (*)" />
                                                                                </div>
                                                                                <div className="col-xs-12 col-sm-12 col-md-6">
                                                                                <input type="text" className="form-control GJB" placeholder="Số điện thoại"/>
                                                                                </div>
                                                                                <div className="DJB">
                                                                                <div className="col-xs-12 col-sm-12 col-md-6">
                                                                                <button type="button" className="buttonLoading btn-primary" style={{ backgroundColor: 'rgb(76, 105, 151)', padding: '6px 60px', margin: '0px auto', display: 'block', borderRadius: '25px', textTransform: 'uppercase' }}>
                                                                                <div className="gwt-HTML buttonLoading-text">Đăng ký</div>
                                                                                <div className="gwt-HTML buttonLoading-status"></div>
                                                                                </button></div>
                                                                                <div className="col-xs-12 col-sm-12 col-md-6">
                                                                                <div className="LIB" id ="fb">Đăng nhập Facebook</div>
                                                                                </div></div></div></div></div></div></div></div></div></div></div>
                    <div className="modal-backdrop fade in" style ={{display:'none'}}></div>
                </div>
                )
    }
}

export default Login;