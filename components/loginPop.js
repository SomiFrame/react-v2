import React from 'react'
import LoginPopCss from '../styles/c-loginPop.scss'
import Link from 'next/link'

const LoginPop = (props) => (
    <React.Fragment>
        <style dangerouslySetInnerHTML={{ __html: LoginPopCss }} />
        <div className="LoginPop">
            <div className="login-title">登陆</div>
            <form id="loginForm" name="loginForm">
                <input name="name" type="text" placeholder="帐号："/>
                <input name="password" type="password" placeholder="密码："/>
                <Link href="/forget"><a>忘记密码?</a></Link>
                <div className="button-group">
                    <button className="login" type="submit">登陆</button>
                    <Link href="/register"><button className="register">注册</button></Link>
                </div>
            </form>
        </div>
    </React.Fragment>
)

export default LoginPop;