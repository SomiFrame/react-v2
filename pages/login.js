import React from 'react'
import LoginPop from '../components/loginPop'
import stylesheet from 'styles/login.scss'
import Router from 'next/router'
import Link from 'next/link'

const LoginSection = (props) => (
    <React.Fragment>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className={props.cName}>
            {props.children}
        </div>
    </React.Fragment>
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

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="login">
                <div className="LoginAnchor">
                    {/*
                     <Link href="/login#first"><a className="anchor anchor-active" ></a></Link>
                     <Link href="/login#second"><a className="anchor" ></a></Link>
                     <Link href="/login#third"><a className="anchor" ></a></Link>*/}
                    <a href="#" className="anchor anchor-active" onClick={handleAnchor('/login#first')}></a>
                    <a href="#" className="anchor" onClick={handleAnchor('/login#second')}></a>
                    <a href="#" className="anchor" onClick={handleAnchor('/login#third')}></a>
                </div>
                <LoginSection cName="LoginTop">
                    <img src="/static/images/login-top-logo.png" />
                    <div id="first" name="first">
                        <div className="top-left">
                            <span>人人都是创作者</span>
                            <div className="left-under-line"></div>
                            <p>发视频，来赚钱</p>
                            <p>让每个人都可以成为创作者</p>
                        </div>
                        <div className="top-right">
                            <LoginPop />
                        </div>
                    </div>
                </LoginSection>
                <LoginSection cName="LoginMiddle">
                    <div className="middle-top" id="second" name="second">
                        <span>发视频 来赚钱</span>
                        <div className="top-under-line"></div>
                        <p>发布视频即能获得分成收入</p>
                        <p>每10000次播放可获得100元收入</p>
                    </div>
                </LoginSection>
                <LoginSection cName="LoginBottom">
                    <div id="third" name="third">
                        <div className="bottom-left">
                            <span>平台流量大收入多</span>
                            <p>依托v2porn电脑PC端和移动web端</p>
                            <p>以及移动APP三大平台分发</p>
                        </div>
                    </div>
                </LoginSection>
            </div>
        )
    }
}
export default Login
