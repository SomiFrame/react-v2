import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import $ from "jquery"

import userSider from 'styles/c-userSider.scss'

//Router.push(href);
class UserSider extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        var href = '/user/user';
        if(e.currentTarget.className == 'navi-parent') {
            href = e.currentTarget.dataset.href;
            $('.navi-parent').removeClass('navi-parent-hover');
            $('.navi-children').hide(500);
            $(e.currentTarget).addClass('navi-parent-hover');
            $(e.currentTarget).next().show(500);
            let $targetEle = $(e.currentTarget);
            if($targetEle.next().length > 0){
                $($targetEle.next()).find('.navi-children-item').first().addClass('chirdren-hover');
                //href = $($targetEle.next()).find('.navi-children-item').first().dataset.href;
            }

        }else if(e.currentTarget.className == 'navi-children-item') {
            href = e.currentTarget.dataset.href;
            $('.navi-children-item').removeClass('chirdren-hover');
            $(e.currentTarget).addClass('chirdren-hover');
        }
        // Router.push(href);
    }
    render() {
        return(
           <div className="UserSider">
               <style dangerouslySetInnerHTML={{ __html: userSider }} />
               <div className="sider-logo">
                   <img src="/static/images/user-logo.png"/>
               </div>
               <div className="sider-content">
                    <ul>
                        <li>
                            <div className="navi-parent navi-parent-hover" data-href="/user/user" onClick={this.handleClick}>
                                <label></label><img src="/static/images/user-index.png"/>首页
                            </div>
                        </li>
                        <li>
                            <div className="navi-parent" data-href="/user/profile" onClick={this.handleClick}>
                                <label></label><img src="/static/images/user-profile.png"/>帐号概览
                            </div>
                        </li>
                        <li>
                            <div className="navi-parent" data-href="/user/videos" onClick={this.handleClick}>
                                <label></label><img src="/static/images/user-videos.png"/>视频管理
                            </div>
                            <div className="navi-children">
                                <div className="navi-children-item" data-href="/user/videos"  onClick={this.handleClick}><label></label>我的视频</div>
                            </div>
                        </li>
                        <li>
                            <div className="navi-parent" data-href="/user/comments" onClick={this.handleClick}>
                                <label></label><img src="/static/images/user-interactive.png"/>互动消息
                            </div>
                            <div className="navi-children">
                                <div className="navi-children-item" data-href="/user/comments" onClick={this.handleClick}><label></label>评论</div>
                                <div className="navi-children-item" data-href="/user/news" onClick={this.handleClick}><label></label>消息</div>
                            </div>
                        </li>
                        <li>
                            <div className="navi-parent" data-href="/user/income" onClick={this.handleClick}>
                                <label></label><img src="/static/images/user-income.png"/>收入管理
                            </div>
                            <div className="navi-children">
                                <div className="navi-children-item" data-href="/user/income" onClick={this.handleClick}><label></label>收入概览</div>
                                <div className="navi-children-item" data-href="/user/records" onClick={this.handleClick}><label></label>提现记录</div>
                            </div>
                        </li>
                        <li>
                            <div className="navi-parent" data-href="/user/history" onClick={this.handleClick}>
                                <label></label><img src="/static/images/user-setting.png"/>帐号设置
                            </div>
                            <div className="navi-children">
                                <div className="navi-children-item" data-href="/user/history" onClick={this.handleClick}><label></label>观看记录</div>
                                <div className="navi-children-item" data-href="/user/collection" onClick={this.handleClick}><label></label>我的收藏</div>
                                <div className="navi-children-item" data-href="/user/account" onClick={this.handleClick}><label></label>帐号资料</div>
                                <div className="navi-children-item" data-href="/user/security" onClick={this.handleClick}><label></label>帐号安全</div>
                            </div>
                        </li>
                    </ul>
               </div>
               <div className="sider-recharge">
                   <img src="/static/images/user-recharge.png"/><Link href="/pay"><button>充值</button></Link>
               </div>
           </div> 
        );
    }
}

export {UserSider};