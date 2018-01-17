import React from 'react'
import _ from 'underscore'
import $ from "jquery"
import RegisterPop from '../components/registerPop.js'
import {LoginSection, FloatTop, LRAnchor} from '../components/loginSection.js'

import stylesheet from 'styles/register.scss'

class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // //滚动监听  显示导航栏
        //默认隐藏悬浮顶部导航
        var initTop = 900;
        $(global.window).on('scroll', _.debounce(function(){
            //this是window
            var scrollTop = $(this).scrollTop();
            if(scrollTop < initTop) {
                //在第一部分的时候，隐藏浮框
                $('.FloatTop').hide(1000);
            } else {
                //否则展示浮框
                $('.FloatTop').show(500);
            }
        },50));
    }
    render() {
        return(
            <div className="Register">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
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
                            <RegisterPop />
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
                <FloatTop cName="FloatTop">
                    注册
                </FloatTop>
                <LRAnchor cName="LandRAnchor" href="/register"/>
            </div>
        );
    }
}

export default Register;