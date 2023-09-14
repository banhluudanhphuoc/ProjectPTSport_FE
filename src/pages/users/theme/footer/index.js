import { memo } from "react";
import './style.scss';
import logo from '../header/logo192.png';
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlinePhone, AiTwotoneEnvironment, AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import bocongthuong from './logoFooter/logoSaleNoti.png';
import vnpay from './logoFooter/vnpay.png';

const Footer = () => {
    return <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer_top">
                    <div className="col-sm-3 col-md-3 col-xl-3 col-lg-3 footer1">
                        <div className="footer_logo">
                            <Link to={""}>
                                <img src={logo} className="logo_footer" alt="logo" />
                            </Link>
                        </div>
                        <div className="footer_address">
                            <div className="footer_address_icon">
                                <AiTwotoneEnvironment />
                            </div>
                            <span>Địa chỉ : 12 Nguyễn Văn Bảo , Gò Vấp</span>
                        </div>
                        <div className="footer_numberphone">
                            <div className="footer_numberphone_icon">
                                <AiOutlinePhone />
                            </div>
                            <span>1234567890</span>
                        </div>
                        <div className="footer_email">
                            <div className="footer_email_icon">
                                <AiOutlineMail />
                            </div>
                            <span>ptsports@student.iuh.edu.vn</span>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-xl-3 col-lg-3 footer2">
                        <h4>CHÍNH SÁCH</h4>
                        <ul>
                            <li><Link to={""} className="link_footer2">Chính sách bảo mật</Link></li>
                            <li><Link to={""} className="link_footer2">Quy định sử dụng</Link></li>
                            <li><Link to={""} className="link_footer2">Chính sách thanh toán</Link></li>
                            <li><Link to={""} className="link_footer2">Chính sách vận chuyển</Link></li>
                            <li><Link to={""} className="link_footer2">Đổi trả hàng online</Link></li>
                            <li><Link to={""} className="link_footer2">Đổi trả hàng tại shop</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-3 col-md-3 col-xl-3 col-lg-3 footer3">
                        <h4>VỀ CHÚNG TÔI</h4>
                        <ul>
                            <li><Link to={""} className="link_footer3">Giới thiệu</Link></li>
                            <li><Link to={""} className="link_footer3">Hướng dẫn mua hàng online</Link></li>
                            <li><Link to={""} className="link_footer3">Tuyển dụng</Link></li>
                            <li><Link to={""} className="link_footer3">Hệ thống cửa hàng</Link></li>
                            <li><Link to={""} className="link_footer3">Tuyển đại lý</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-3 col-md-3 col-xl-3 col-lg-3 footer4">
                        <h4>ĐĂNG KÍ NHẬN TIN</h4>
                        <span>Bạn có muốn nhận thêm ưu đãi đặc biệt ? <br /> Đăng kí ngay. </span>
                        <div className="dangki_mail_box">
                            <input type={"text"} id="dangki_mail_text" />
                            <div className="dangki_footer4_click">
                                <Link to={""} className="dangki_footer4">Đăng kí</Link>
                            </div>
                        </div>
                        <div className="footer4_icon">
                            <ul>
                                <li><Link to={""}><AiFillFacebook /></Link></li>
                                <li><Link to={""}><AiFillInstagram /></Link></li>
                                <li><Link to={""}><AiFillYoutube /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="col-sm-4 col-md-4 col-xl-4 col-lg-4">
                        <Link to={"#"}>
                            <img src={bocongthuong} className="logo_bocongthuong" alt="logo" />
                        </Link>
                    </div>
                    <div className="col-sm-4 col-md-4 col-xl-4 col-lg-4 footer_bottom_ban_quyen">
                        <span>© 2023 Công ty Cổ phần Đầu tư Phát Triển Thương Mại PT Sports. MST/ĐKKD/QĐTL: ********** | Bản quyền của <Link to={""}>PT Sports</Link> </span>
                    </div>
                    <div className="col-sm-4 col-md-4 col-xl-4 col-lg-4">
                        <Link to={"#"}>
                            <img src={vnpay} className="logo_vnpay" alt="logo" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default memo(Footer);