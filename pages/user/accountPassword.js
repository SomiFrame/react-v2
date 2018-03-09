import React from 'react'
import Link from 'next/link'
import validate from 'validate.js';
import $ from "jquery";
import {UserLayout} from '../../components/user-components/userLayout'

import securityFromCss from 'styles/u-security-from.scss'

const constraints = {
    password: {
        presence: {
            message: '^*当前密码不能为空'
        },
        length: {
            minimum: 6,
            tooShort: '^*密码的长度为6到16个字符，请检查',
            maximum: 16,
            tooLong: '^*密码的长度为6到16个字符，请检查'
        }
    },
    newPassword: {
        presence: {
            message: '^*新密码不能为空'
        }
        ,
        length: {
            minimum: 6,
            tooShort: '^*密码的长度为6到16个字符，请检查',
            maximum: 16,
            tooLong: '^*密码的长度为6到16个字符，请检查'
        }
    },
    confirmPassword: {
        presence: {
            message: '^*重复新密码不能为空'
        },
        length: {
            minimum: 6,
            tooShort: '^*密码的长度为6到16个字符，请检查',
            maximum: 16,
            tooLong: '^*密码的长度为6到16个字符，请检查'
        },
        equality: {
            attribute: "newPassword",
            message: "^*重复新密码和新密码两次输入不一致"
        }
    }
};

class AccountPassword extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(e) {
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
            $('.security-form').hide();
            $('.step3-form').show();
        }
    }
    render() {
        return(
            <div className="AccountPassword">
                <style dangerouslySetInnerHTML={{ __html: securityFromCss }} />
                <UserLayout>
                    <div className="div-container">
                        <div className="div-title">帐号密码修改</div>
                        <div className="div-content">
                            <form className="security-form" onSubmit={this.submit}>
                                <div className="from-row">
                                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前密码 :</label>
                                    <input type="password" name="password" />
                                    <div className="from-error" name="password"></div>
                                </div>
                                <div className="from-row">
                                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新密码 :</label>
                                    <input type="password" name="newPassword" />
                                    <div className="from-error" name="newPassword"></div>
                                </div>
                                <div className="from-row">
                                    <label>&nbsp;&nbsp;&nbsp;&nbsp;重复新密码 :</label>
                                    <input type="password" name="confirmPassword" />
                                    <div className="from-error" name="confirmPassword"></div>
                                </div>
                                <div className="from-row">
                                    <button type="submit">确认修改</button>
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

export default AccountPassword;