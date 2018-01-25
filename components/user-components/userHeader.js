import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

import userHeader from 'styles/c-userHeader.scss'

const sysData = [
    {key:'1', msg: '会员充值到帐', time: '2017-05-06 15:40'},
    {key:'2', msg: '系统通知：您上传的视频已通过审核.', time: '2017-06-20 16:30'}
];
const comData = [
    {key:'3', msg: '用户1评论您的视频', time: '2017-09-23 09:40'}
];
const interData = [
    {key:'4', msg: '您关注的XXX用户更新了视频.', time: '2017-12-06 03:40'},
    {key:'5', msg: '您关注的我不是这样的Toto用户更新了视频.', time: '2017-12-20 18:30'}
];
class TipsContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: sysData, msgType: 0, msgHref: '/user/news'};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(param, e) {
        if(param == 'sys') {
            this.setState({
                data: sysData,
                msgType: 0,
                msgHref: '/user/news'
            });
        }else if(param == 'com') {
            this.setState({
                data: comData,
                msgType: 1,
                msgHref: '/user/comment'
            });
        }else {
            this.setState({
                data: interData,
                msgType: 2,
                msgHref: '/user/news'
            });
        }
    }
    render() {
        return(
            <div className="TipsContent">
                <div className="tip-title">
                    <span className={this.state.msgType == 0 ? `span-hover` : ''} onClick={this.handleClick.bind(this, 'sys')}>系统消息</span>
                    <span className={this.state.msgType == 1 ? `span-hover` : ''} onClick={this.handleClick.bind(this, 'com')}>用户评论</span>
                    <span className={this.state.msgType == 2 ? `span-hover` : ''} onClick={this.handleClick.bind(this, 'inter')}>互动消息</span>
                </div>
                <div className="tip-content">
                    {this.state.data.map((item) => (
                        <div className="tip-news" key={item.key}>
                            <label><a></a>{item.msg}</label>
                            <span>{item.time}</span>
                        </div>
                    ))}
                    <div className="tips-bottom">
                        <Link href={this.state.msgHref}><a>查看更多 &gt;</a></Link>
                    </div>
                </div>
            </div>  
        );
    }
}

//我头像悬浮后展示的个人信息
class UserInfoContent extends React.Component {
    render() {
        return(
            <div className="UserInfoContent">
                <div className="info-middle">
                    <div className="info-user">
                        <img src={this.props.userInfo.headerHref}/>
                        <div>
                            <p>{this.props.userInfo.name}</p>
                            {this.props.userInfo.isLogin ? <img src="/static/images/icon-vip-24x22.png"/> : <span>你还不是会员</span>}
                        </div>
                        {!this.props.userInfo.isLogin && <Link href="/pay"><button>现在加入</button></Link>}
                    </div>
                    <div className="info-item">
                        <Link href="/user/history">
                            <div className="item-section">
                                <div className="section-record"></div>
                                <p>观看记录</p>
                            </div>
                        </Link>
                        <Link href="/user/collection">
                            <div className="item-section">
                                <div className="section-collection"></div>
                                <p>我的收藏</p>
                            </div>
                        </Link>
                        <Link href="/user/videos">
                            <div className="item-section">
                                <div className="section-video"></div>
                                <p>我的视频</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="info-bottom">
                    <Link href="/user/account"><a>帐号设置</a></Link>
                    <Link href="/logout"><span>退出</span></Link>
                </div>
            </div>  
        );
    }
}

class UserHeaderTips extends React.Component {
    render() {
        const className = "UserHeaderTips " + this.props.cName;
        return(
            <div className={className}>
                <div className="tir-up">
                   <div></div>
                </div>
                {this.props.children}
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
                        <div className="top-tips">
                            <UserHeaderTips cName="message-tips">
                                <TipsContent />
                            </UserHeaderTips>
                        </div>
                        <div className="top-userInfo">
                            <div>
                                <img src={this.props.userInfo.headerHref} />
                                <UserHeaderTips cName="user-header-tips">
                                    <UserInfoContent userInfo={this.props.userInfo}/>
                                </UserHeaderTips>
                            </div>
                            {this.props.userInfo.name}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {UserHeader};