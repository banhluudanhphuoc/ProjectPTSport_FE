import { memo } from "react";
import "./style.scss";
import {
    PasswordInput,
    TextInput,
} from '@mantine/core';
import Banner from "../../users/theme/banner";
import { Link } from "react-router-dom";
import LoginImg from '../../../style/img/login.jpg';

const LoginUserPage = () => {
    // const form = useForm({
    //     initialValues: {
    //         password: '',
    //     }
    // });alt=""/
    return <>
        <Banner />
        <section class="login_box_area section_gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="login_box_img">
                            <img class="img-fluid" src={LoginImg} alt="" />
                            <div class="hover">
                                <h4>New to our website?</h4>
                                <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                <Link class="primary-btn" href="registration.html">Create an Account</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="login_form_inner">
                            <h3>Log in to enter</h3>
                            <form class="row login_form" action="" method="" id="contactForm" >
                                <div class="col-md-12">
                                    <TextInput
                                        label="Tên đăng nhập"
                                        placeholder="Tên đăng nhập"
                                        // withAsterisk {...form.getInputProps('name')}
                                        id="username"
                                    />
                                </div>
                                <div class="col-md-12">
                                    <PasswordInput
                                        label="Mật khẩu"
                                        mt="md"
                                        placeholder="Mật khẩu "
                                        className="password-user"
                                        // {...form.getInputProps('password')}
                                        id="password"
                                    />
                                </div>
                                <div class="col-md-12 form-group">
                                    <div class="creat_account">
                                        <input type="checkbox" id="f-option2" name="selector" />
                                        <label for="f-option2">Keep me logged in</label>
                                    </div>
                                </div>
                                <div class="col-md-12 form-group">
                                    <button type="submit" value="submit" class="primary-btn">Log In</button>
                                    <Link href="#">Forgot Password?</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default memo(LoginUserPage);