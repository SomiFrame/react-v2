import React from 'react';
import LoginPopCss from '../styles/c-loginPop.scss';
import Link from 'next/link';
import validate from 'validate.js';
import $ from "jquery";

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
    }
};

class LoginPop extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        var form = e.target || e.srcElement;
        var errors = validate(form,constraints);
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
        return (
            <React.Fragment>
                <style dangerouslySetInnerHTML={{ __html: LoginPopCss }} />
                <div className="LandRPop">
                    <div className="pop-title">登陆</div>
                    <form id="loginForm" name="loginForm" onSubmit={this.handleSubmit}>
                        <div className="form-div">
                            <input id="name" name="name" type="text" placeholder="帐号："/>
                            <label htmlFor="name" name="name"></label>
                        </div>
                        <div className="form-div">
                            <input id="password" name="password" type="password" placeholder="密码："/>
                            <label htmlFor="password" name="password"></label>
                        </div>
                        <Link href="/forget"><a>忘记密码?</a></Link>
                        <div className="login-button-group">
                            <button className="login" type="submit">登陆</button>
                            <Link href="/register"><button className="register">注册</button></Link>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginPop;