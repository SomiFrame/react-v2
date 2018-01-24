import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import $ from "jquery"

import userHeader from 'styles/c-userHeader.scss'

const sysData = [
    {key:'1', msg: '会员充值到帐', time: '2017-05-06 15:40'},
    {key:'2', msg: '系统通知：您上传的视频已通过审核.', time: '2017-06-20 16:30'}
]
const comData = [
    {key:'3', msg: '用户1评论您的视频', time: '2017-09-23 09:40'}
]
const interData = [
    {key:'4', msg: '您关注的XXX用户更新了视频.', time: '2017-12-06 03:40'},
    {key:'5', msg: '您关注的我不是这样的Toto用户更新了视频.', time: '2017-12-20 18:30'}
]
class TipsContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: sysData};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(param) {
        if(param == 'sys') {
            this.setState({data: sysData});
        }else if(param == 'com') {
            this.setState({data: comData});
        }else {
            this.setState({data: interData});
        }
    }
    render() {
        return(
            <div className="TipsContent">
                <div className="tip-title">
                    <span onClick={this.handleClick.bind('sys')}>系统消息</span>
                    <span onClick={this.handleClick.bind('com')}>用户评论</span>
                    <span onClick={this.handleClick.bind('inter')}>互动消息</span>
                </div>
                <div className="tip-content">
                    {this.state.data.map((item) => (
                        <div className="tip-news" key={item.key}>
                            <label>{item.msg}</label>
                            <span>{item.time}</span>
                        </div>
                    ))}
                </div>
            </div>  
        );
    }
}

class UserHeaderTips extends React.Component {
    render() {
        return(
            <div className="UserHeaderTips">
                <div className="tir-up">
                   <div></div>
                </div>
                <TipsContent />
            </div>
        );
    }
}

class UserHeader extends React.Component {
    render() {
        return(
            <div className="UserHeader">
                <style dangerouslySetInnerHTML={{ __html: userHeader }} />
                <div>
                    <div className="header-info">
                        <button>上传</button>
                        <div className="top-tips"></div>
                        <UserHeaderTips>
                        </UserHeaderTips>
                        <div className="top-userInfo">
                            <img src="/static/images/header.jpg"/>
                            我是这样的toro
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {UserHeader};