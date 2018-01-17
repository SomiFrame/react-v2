import React from 'react'
import $ from 'jquery'
import Router from 'next/router'
import loginSction from 'styles/c-loginSection.scss'

//登陆和注册界面公用的部分组建块:两个界面中的上中下三个部分
const LoginSection = (props) => (
    <React.Fragment>
        <style dangerouslySetInnerHTML={{ __html: loginSction }} />
        <div className={props.cName}>
            {props.children}
        </div>
    </React.Fragment>
)

function handleFloatTop() {
    $('.FloatTop').hide(1000);
    $('body,html').animate({scrollTop:0},1000);
}

//登陆和注册界面中的下滑时 页面顶部出现悬浮窗口
const FloatTop = (props) => (
    <div className={props.cName}>
        <img src="/static/images/login-top-logo.png" />
        <div onClick={handleFloatTop}>{props.children}</div>
    </div>
)

function handleAnchor (href) {
    return (e) => {
        e.preventDefault();
        var children = e.currentTarget.parentElement.children;
        for(let i = 0,len = children.length; i < len; i++) {
            children[i].className = 'anchor';
        }
        e.currentTarget.className = 'anchor anchor-active';
        Router.push(href);
    }
}
//登陆和注册界面中的 右侧悬浮 跳转模块
const LRAnchor = (props) => (
    <div className={props.cName}>
        <a href="#" className="anchor anchor-active" onClick={handleAnchor(`${props.href}#first`)}></a>
        <a href="#" className="anchor" onClick={handleAnchor(`${props.href}#second`)}></a>
        <a href="#" className="anchor" onClick={handleAnchor(`${props.href}#third`)}></a>
    </div>
)

export {LoginSection, FloatTop, LRAnchor};