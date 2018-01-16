import React from 'react'
import Link from 'next/link'
import validate from 'validate.js'
import $ from "jquery"

import LoginPopCss from '../styles/c-loginPop.scss'

const constraints = {
    name: {
        presence: {
            message: '^*帐号不能为空.'
        }
    },
    password: {
        presence: {
            message: '^*密码不能为空'
        },
        length: {
            minimum: 6,
            tooShort: '^*密码的长度为6到16个字符，请检查',
            maximum: 16,
            tooLong: '^*密码的长度为6到16个字符，请检查'
        }
    },
    email: {
        presence: {
            message: '^*邮件不能为空.'
        },
        email: {
            message: '^*请填写正确格式的邮箱'
        }
    },
    agree: {
        presence: {
            message: '^*请同意协议和政策'
        }
    }
};

class RegisterPop extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        let form = e.target;
        let errors = validate(form, constraints);
        $(form).find('label').html('').removeClass('has-error');
        if (errors) {
            for (let i in errors) {
                $(form).find('label[name="' + i + '"]').html(errors[i][0]).addClass('has-error');
            }
        } else {
            console.log('没有错误，可以提交了');
        }
    }
    render() {
        return(
            <React.Fragment>
                <style dangerouslySetInnerHTML={{ __html: LoginPopCss }} />
                <div className="LandRPop" style={{height: '454px'}}>
                    <div className="pop-title">注册</div>
                    <form id="registerForm" name="registerForm" onSubmit={this.handleSubmit}>
                        <div className="form-div">
                            <input id="name" name="name" type="text" placeholder="帐号："/>
                            <label htmlFor="name" name="name"></label>
                        </div>
                        <div className="form-div">
                            <input id="password" name="password" type="password" placeholder="密码："/>
                            <label htmlFor="password" name="password"></label>
                        </div>
                        <div className="form-div">
                            <input id="email" name="email" type="text" placeholder="邮箱："/>
                            <label htmlFor="email" name="email"></label>
                        </div>
                        <div className="register-button">
                            <button className="login" type="submit">注册</button>
                            <Link href="/login"><a>*已有帐号,现在登陆 &gt;</a></Link>
                        </div>
                        <div className="register-allow">
                            <input id="agree" type="checkbox" name="agree" defaultChecked/>
                            <span>点击注册表示你同意<
                                Link href="/login"><a>《用户协议》</a></Link>和<
                                Link href="/login"><a>《隐私政策》</a></Link>
                            </span>
                            <label htmlFor="agree" name="agree"></label>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default RegisterPop;