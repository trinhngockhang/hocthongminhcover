import React,{Component} from 'react';


class Why extends Component{
    render(){
        return(
            <div className="container bg-why" id="why-sroll">
            <div className="title-main">
                <div>TẠI SAO NÊN CHỌN CHÚNG TÔI</div>
            </div>
            <div className="des">Giữa vô vàn các website học trực tuyến, chúng tôi mang đến cho bạn lựa chọn tốt nhất</div>
            
            <div style={{marginTop: '30px'}}>
                <div className="col col-xs-12 col-sm-3 item-why">
                    <img src={require("../../../static/images/hocthongminh/cam-ket.png")} />
                    <div>
                        <strong>Cam kết chất lượng</strong>
                        <p>Chúng tôi cam kết mang đến khác hàng những khoá học chất lượng. 
                        Tất cả bài học được biên soạn bởi các chuyên gia có nhiều năm kinh nghiệm giảng dạy
                        </p>
                    </div>
                </div>
                <div className="col col-xs-12 col-sm-3 item-why">
                    <img src={require("../../../static/images/hocthongminh/tinh-hieu-qua.png")}/>
                    <div>
                        <strong>Tính hiệu quả</strong>
                        <p>Học tập thú vị. Học nhanh, nhớ lâu. Cá nhân hoá việc học theo trình độ và kết quả.
                        </p>
                    </div>
                </div>
                <div className="col col-xs-12 col-sm-3 item-why">
                    <img src={require("../../../static/images/hocthongminh/tinh-tuong-tac.png")}/>
                    <div>
                        <strong>Tính tiện lợi cao</strong>
                        <p>Học tập mọi lúc, mọi nơi trên nhiều nền tảng thiết bị: website, điên thoại android, ios. Tiến độ học được đồng bộ trên các thiết bị
                        </p>
                    </div>
                </div>
                <div className="col col-xs-12 col-sm-3 item-why">
                    <img src={require("../../../static/images/hocthongminh/tinh-tien-loi.png")}/>
                    <div>
                        <strong>Tính tương tác cao</strong>
                        <p>Tính năng chat online giữa các thành viên trong lớp và với giảng viên. Tính năng Thảo luận, chia sẻ tài liệu,...
                        </p>
                    </div>
                </div>
            </div>
        </div>
     )
}
}

export default Why;