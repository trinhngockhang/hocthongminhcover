import React,{Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';
const options = {
    items: 1,
	dots: true,
    autoplay: true
};
class Feedback extends Component{
    render(){
        return(
            <div className="row bg-feedback" id="feedback-scroll">
            <div className="container">
                <div className="col col-xs-12 col-sm-6 feedback-parent-panel-1">
                    <div className="title-feebback">ĐÁNH GIÁ CỦA CHUYÊN GIA</div>
                            <div className="short-line"></div>
                            <div className="mg-des-feddback des-feddback">Nhờ đánh giá của cách chuyên gia 
                            trong lĩnh vực giáo dục và công nghệ giúp chúng tôi hoàn thiện tốt hơn</div>
                            <OwlCarousel  ref="car" options = {options}>
                            <div className="owl-item" style={{width: '550px'}}><div className="item">
                                <div className="des-feddback frame-des">
                                    <p className="dot-4">
                                        Hệ thống hiện đại, tính bảo mật cao, chống download, sao chép bài giảng. Nền tảng công nghệ tiên tiến, hỗ trợ người dùng tối đa. Giao diện thân thiện, dễ dàng sử dụng
                                    </p>
                                </div>
                                <div className="director-info">
                                    <img className="director-avatar" id="director-avatar"src="http://storage.googleapis.com/kslearning/images/277447485-1527578253097-screenshot2018-05-29at14.16.21.png"/>
                                    <div className="director-name">
                                        <p>TS. Nguyễn Thanh Hùng</p>
                                        <p></p>
                                        <p>Trưởng bộ môn CNPM, Trường Đại học Bách Khoa Hà Nội</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="owl-item" style={{width: '550px'}}><div className="item">
                                <div className="des-feddback frame-des">
                                    <p className="dot-4">
                                        Hệ thống đào tạo trực tuyến được xây dựng với những tính năng ưu việt giúp tối ưu hoá việc học, ghi nhớ, trao đổi, tương tác, giúp học viên tiếp thu các kiến thức một cách dễ dàng, hiệu quả và thú vị.
                                    </p>
                                </div>
                                <div className="director-info">
                                    <img className="director-avatar" id="director-avatar" src="http://storage.googleapis.com/kslearning/images/865595390-1527577570113-tshai.png"/>
                                    <div className="director-name">
                                        <p>TS. Trần Hoàng Hải</p>
                                        <p></p>
                                        <p>Chuyên gia về lĩnh vực eLearning - Phó Giám đốc Trung tâm Mạng - Đại học Bách Khoa Hà Nội</p>
                                    </div>
                                </div>
                            </div></div>
                            <div className="owl-item" style={{width: '550px'}}><div className="item">
                                <div className="des-feddback frame-des">
                                    <p className="dot-4">
                                         Giao diện hiện đại chuyên nghiệp. Số lượng khóa học và bài giảng đăng tải lên hệ thống không hạn chế, phù hợp với cả với những trường có quy mô, số lượng học viên lớn. Học viên có thể thấy được nội dung toàn bộ khóa học trước khi giảng viên dạy cho họ
                                    </p>
                                </div>
                                <div className="director-info">
                                    <img className="director-avatar" id="director-avatar" src="http://storage.googleapis.com/kslearning/images/928707584-1527644208516-capture.png"/>
                                    <div className="director-name">
                                        <p>Võ Khắc Minh</p>
                                        <p></p>
                                        <p>Phó giám đốc Công ty Cổ phần Truyền thông Phú Thái</p>
                                    </div>
                                </div>
                            </div></div>
                            </OwlCarousel>

                    

                    {/* <div className="slide-feedback owl-carousel owl-theme" style={{opacity: '1', display: 'block'}}>
                            <div className="owl-wrapper-outer"><div className="owl-wrapper" style={{width: '3300px',left: '0px', display: 'block', transform: 'translate3d(-550px, 0px, 0px)', transition: 'all 800ms ease'}}>
                            </div></div>
                    <div className="owl-controls clickable"><div className="owl-pagination"><div className="owl-page"><span className=""></span></div><div className="owl-page active"><span className=""></span></div><div className="owl-page"><span className=""></span></div></div></div></div> */}
                </div>
                <div className="line-col"></div>
                <div className="col col-xs-12 col-sm-6 feedback-parent-panel-2">
                    <div className="title-feebback">CẢM NHẬN CỦA HỌC VIÊN</div>
                    <div className="short-line"></div>
                    <div className="mg-des-feddback des-feddback">Năm 2018, chúng tôi có hơn 300.0000 học viên đến từ nhiều quốc gia khác nhau</div>
                   
                    <OwlCarousel ref="car" options = {options} style={{width: '3300px',left: '0px', display: 'block'}}>
                    <div className="owl-item" style={{width: '550px'}}><div className="item">
                                <div className="des-feddback frame-des">
                                    <p className="dot-5">
                                        Học kỳ vừa rồi được bạn bè giới thiệu Học thông minh, cả 2 môn pháp luật đại cương và tin học đại cương thi cuối kỳ em đều được 10, còn kinh tế vi mô sai 2 câu nên được 9,6. Kỳ nay em tiếp tục sử dụng Học thông minh để học môn kinh tế vĩ mô, hi vọng sẽ tiếp tục đạt điểm cao.
                                    </p>
                                </div>
                                <div className="director-info">
                                    <img className="director-avatar" id="director-avatar" src="http://storage.googleapis.com/kslearning/images/368890267-1526321545170-img_9430_fotor.jpg"/>
                                    <div className="director-name">
                                        <p>Đỗ Thị Thùy Dương</p>
                                        <p>Trường Đại học Thương mại</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="owl-item" style={{width: '550px'}}><div className="item">
                                <div className="des-feddback frame-des">
                                    <p className="dot-5">
                                        Hocthongminh là một trang web học tập vô cùng bổ ích với số bộ câu hỏi đầy đủ, bám sát kì thi thật. Một điều đặc biệt mình rất thích khi sử dụng Hocthongminh là HỌC RẤT NHANH THUỘC các câu hỏi lý thuyết. Quả đúng là Học thông minh không sai chút nào.
                                    </p>
                                </div>
                                <div className="director-info">
                                    <img className="director-avatar" id="director-avatar" src="http://storage.googleapis.com/kslearning/images/440464067-1527571303328-screenshot2018-05-29at12.18.52.png"/>
                                    <div className="director-name">
                                        <p>Lương Mạnh Hải</p>
                                        <p>Trường Đại học Thương Mại</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="owl-item" style={{width: '550px'}}><div className="item">
                                <div className="des-feddback frame-des">
                                    <p className="dot-5">
                                        Trong thời gian học tập trên Hocthongminh em thực sự rất ấn tượng bởi hệ thống các câu hỏi lý thuyết bám sát kì thi thật&nbsp; qua đó giúp mình cải thiện đáng kể điểm thi mỗi kì. Đặc biệt là môn Đường lối cách mạng là môn phải học thuộc rất nhiều và mình không biết làm cách nào để có thể học được và càng không dám nghĩ đến là việc học tốt và đạt được số điểm như hiện tại. Chúc Hocthongminh ngày càng phát triển để giúp cho những lứa sinh viên như bọn mình đỡ mệt mỏi trong việc thi cử.
                                    </p>
                                </div>
                                <div className="director-info">
                                    <img className="director-avatar" id="director-avatar" src="http://storage.googleapis.com/kslearning/images/566506346-1527569787561-oanhtrần.png"/>
                                    <div className="director-name">
                                        <p>Nguyễn Hải Yến</p>
                                        <p>Trường Đại học Kinh tế quốc dân</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                    </OwlCarousel>  

                    {/* <div className="slide-feedback owl-carousel owl-theme" style={{opacity: '1', display: 'block'}}>
                        
                            <div className="owl-wrapper-outer"><div className="owl-wrapper" style={{width: '3300px', left: '0px', display: 'block', transition: 'all 1000ms ease', transform: 'translate3d(0px, 0px, 0px)'}}>
                            </div></div> 
                    <div className="owl-controls clickable"><div className="owl-pagination"><div className="owl-page active"><span className=""></span></div><div className="owl-page"><span className=""></span></div><div className="owl-page"><span className=""></span></div></div></div></div> */}
                </div>
            </div>
        </div>
     )
}
}

export default Feedback;