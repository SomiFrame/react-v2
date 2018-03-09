import React from 'react'
import Link from 'next/link'
import validate from 'validate.js';
import $ from "jquery";
import {UserLayout} from '../../components/user-components/userLayout'

import securityFromCss from 'styles/u-security-from.scss'

const constraints = {
    email: {
        presence: {
            message: '^*安全邮箱不能为空'
        },
        email: {
            message: '^*安全邮箱格式不正确'
        }
    },
    code: {
        presence: {
            message: '^*验证码不能为空'
        }

    }
};
const constraints2 = {
    password: {
        presence: {
            message: '^*新支付密码不能为空'
        }
        ,
        length: {
            minimum: 6,
            tooShort: '^*密码的长度为6到16个字符，请检查',
            maximum: 16,
            tooLong: '^*密码的长度为6到16个字符，请检查'
        }
    },
    newPassword: {
        presence: {
            message: '^*重复新支付密码不能为空'
        },
        length: {
            minimum: 6,
            tooShort: '^*密码的长度为6到16个字符，请检查',
            maximum: 16,
            tooLong: '^*密码的长度为6到16个字符，请检查'
        },
        equality: {
            attribute: "password",
            message: "^*重复新支付密码和新支付密码两次输入不一致"
        }
    }
};
class ForgetPayPassword extends React.Component {
    constructor(props) {
        super(props);
        this.secdCode = this.secdCode.bind(this);
        this.validateSubmit = this.validateSubmit.bind(this);
        this.modifySubmit = this.modifySubmit.bind(this);
    }
    secdCode(e) {
        console.log('第一步发送验证码');
    }
    validateSubmit(e) {
        e.preventDefault();
        var form = e.target || e.srcElement;
        var errors = validate(form,constraints);
        // $(form).find('label').html('').removeClass('has-error');
        if (errors) {
            for (let i in errors) {
                $(form).find('.from-error[name="' + i + '"]').html(errors[i][0]);
                // .addClass('has-error');
            }
        } else {
            $(form).find('.from-error').html('');
            console.log('没有错误，可以提交了');
            //隐藏第一步操作 展示第二部操作
            $('.validate-email-form').hide();
            $('.modify-password-form').show();
        }
    }
    modifySubmit(e) {
        e.preventDefault();
        var form = e.target || e.srcElement;
        var errors = validate(form,constraints2);
        // $(form).find('label').html('').removeClass('has-error');
        if (errors) {
            for (let i in errors) {
                $(form).find('.from-error[name="' + i + '"]').html(errors[i][0]);
                // .addClass('has-error');
            }
        } else {
            $(form).find('.from-error').html('');
            console.log('没有错误，可以提交了');
            $('.modify-password-form').hide();
            $('.step3-form').show();
        }
    }
    render() {
        return(
            <div className="ForgetPayPassword">
                <style dangerouslySetInnerHTML={{ __html: securityFromCss }} />
                <UserLayout>
                    <div className="div-container">
                        <div className="div-title">支付密码 > 邮箱验证</div>
                        <div className="div-content">
                            <form className="security-form validate-email-form" onSubmit={this.validateSubmit}>
                                <div className="from-row">
                                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;安全邮箱 :</label>
                                    <input type="text" name="email" />
                                    <div className="from-error" name="email"></div>
                                </div>
                                <div className="from-row">
                                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;验证码 :</label>
                                    <input type="text" name="code" className="input-code"/>
                                    <button className="button-send" type="button" onClick={this.secdCode}>发送</button>
                                    <div className="from-error" name="code"></div>
                                </div>
                                <div className="from-row">
                                    <button type="submit" className="set-pay-password">下一步</button>
                                </div>
                            </form>
                            <form className="security-form modify-password-form" onSubmit={this.modifySubmit}>
                                <div className="from-row">
                                    <label>&nbsp;&nbsp;&nbsp;&nbsp;新支付密码 :</label>
                                    <input type="password" name="password" />
                                    <div className="from-error" name="password"></div>
                                </div>
                                <div className="from-row">
                                    <label>重复支付密码 :</label>
                                    <input type="password" name="newPassword"/>
                                    <div className="from-error" name="newPassword"></div>
                                </div>
                                <div className="from-row">
                                    <button type="submit" className="set-pay-password">确认</button>
                                </div>
                            </form>
                            <div className="step3-form">
                                恭喜您！密码修改成功,请牢记。
                                <p>跳转至 <Link href="/user/security"><span>帐号安全</span></Link></p>
                            </div>
                        </div>
                    </div>
                </UserLayout>
            </div>
        );
    }
}

export default ForgetPayPassword;