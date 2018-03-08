import React from 'react'
import Link from 'next/link'
import validate from 'validate.js';
import $ from "jquery";
import {UserLayout} from '../../components/user-components/userLayout'

import securityFromCss from 'styles/u-security-from.scss'

const constraints1 = {
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
    newEmail: {
        presence: {
            message: '^*新邮箱不能为空'
        },
        email: {
            message: '^*新邮箱格式不正确'
        }
    },
    newCode: {
        presence: {
            message: '^*验证码不能为空'
        }

    }
};

class SecurityEmail extends React.Component {
    constructor(props) {
        super(props);
        this.step1submit = this.step1submit.bind(this);
        this.step1sendCode = this.step1sendCode.bind(this);
        this.step2submit = this.step2submit.bind(this);
        this.step2sendCode = this.step2sendCode.bind(this);
    }
    step1sendCode(e) {
        console.log('步骤1发送验证码');
    }
    step2sendCode(e) {
        console.log('步骤2发送验证码');
    }
    step1submit(e) {
        e.preventDefault();
        var form = e.target || e.srcElement;
        var errors = validate(form,constraints1);
        // $(form).find('label').html('').removeClass('has-error');
        if (errors) {
            for (let i in errors) {
                $(form).find('.from-error[name="' + i + '"]').html(errors[i][0]);
                // .addClass('has-error');
            }
        } else {
            $(form).find('.from-error').html('');
            console.log('没有错误，可以提交了');
            //隐藏步骤1，现实步骤2
            $('.step1-form').hide();
            $('.step2-form').show();
        }
    }
    step2submit(e) {
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
            //隐藏步骤2，显示修改成功
            $('.step2-form').hide();
            $('.step3-form').show();
        }
    }
    render() {
        return(
            <div className="SecurityEmail">
                <style dangerouslySetInnerHTML={{ __html: securityFromCss }} />
                <UserLayout>
                    <div className="div-container">
                        <div className="div-title">安全邮箱修改</div>
                        <div className="div-content">
                            <div className="security-top">
                                <div className="top-step top-step1 top-step-hover">
                                    <div>1</div>
                                    <p>验证原邮箱</p>
                                </div>
                                <div className="top-line top-line1"></div>
                                <div className="top-step top-step2">
                                    <div>2</div>
                                    <p>绑定新邮箱</p>
                                </div>
                                <div className="top-line top-line2"></div>
                                <div className="top-step top-step3">
                                    <div>3</div>
                                    <p>修改完成</p>
                                </div>
                            </div>
                            <form className="security-form step1-form" onSubmit={this.step1submit}>
                                <div className="from-row">
                                    <label>&nbsp;&nbsp;&nbsp;&nbsp;安全邮箱 :</label>
                                    <input type="text" name="email" />
                                    <div className="from-error" name="email"></div>
                                </div>
                                <div className="from-row">
                                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;验证码 :</label>
                                    <input type="text" name="code" className="input-code"/>
                                    <button className="button-send" type="button" onClick={this.step1sendCode}>发送</button>
                                    <div className="from-error" name="code"></div>
                                </div>
                                <div className="from-row">
                                    <button type="submit">下一步</button>
                                </div>
                            </form>
                            <form className="security-form step2-form" onSubmit={this.step2submit}>
                                <div className="from-row">
                                    <label>绑定新邮箱 :</label>
                                    <input type="text" name="newEmail" />
                                    <div className="from-error" name="newEmail"></div>
                                </div>
                                <div className="from-row">
                                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;验证码 :</label>
                                    <input type="text" name="newCode" className="input-code"/>
                                    <button className="button-send" type="button" onClick={this.step2sendCode}>发送</button>
                                    <div className="from-error" name="newCode"></div>
                                </div>
                                <div className="from-row">
                                    <button type="submit">确认修改</button>
                                </div>
                            </form>
                            <div className="step3-form">
                                恭喜您！您的邮箱修改成功。
                                <p>跳转至<Link href="/user/security"><span>帐号安全</span></Link></p>
                            </div>
                        </div>
                    </div>
                </UserLayout>
            </div>
        );
    }
}

export default SecurityEmail;