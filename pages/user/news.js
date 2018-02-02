import React from 'react'
import Link from 'next/link'
import {UserLayout} from '../../components/user-components/userLayout'

import newsCss from 'styles/u-news.scss'

const sysData = [
    {id: '1',msgType:'1',msg: '系统通知 您上传的视频已经通过审核',isRead: false,msgDate: '2016.12.31',msgTime: '15:04'},
    {id: '2',msgType:'1',msg: '系统通知 您上传的视频已经通过审核',isRead: true,msgDate: '2017.12.31',msgTime: '15:04'},
    {id: '3',msgType:'1',msg: '系统通知 您上传的视频已经通过审核',isRead: true,msgDate: '2018.12.31',msgTime: '15:04'}
];
const comData = [
    {id: '4',msgType:'2',msg: 'xxx评论了您的视频《事实上1》',isRead: false,msgDate: '2016.5.31',msgTime: '09:04'},
    {id: '5',msgType:'2',msg: 'xxx评论了您的视频《事实上2》',isRead: false,msgDate: '2017.5.31',msgTime: '10:04'},
    {id: '6',msgType:'2',msg: 'xxx评论了您的视频《事实上3》',isRead: true,msgDate: '2018.5.31',msgTime: '11:04'}
];
const intData = [
    {id: '7',msgType:'3',msg: 'xxx赞了您的视频《事实上4》',isRead: false,msgDate: '2016.5.14',msgTime: '07:04'},
    {id: '8',msgType:'3',msg: 'xxx收藏了您的视频《事实上5》',isRead: true,msgDate: '2017.5.14',msgTime: '02:04'},
    {id: '9',msgType:'3',msg: 'xxx关注了您',isRead: false,msgDate: '2018.5.22',msgTime: '03:04'}
];

const NewsItem = (props) => (
    <div className="NewsItem">
        {
            props.newsData.map((item) => (
                <div className="item-div clearfix" key={item.id}>
                    <div className={item.isRead ? 'item-div-left' : 'item-div-left left-no-read'}>
                        <div></div><span>{item.msg}</span>
                        {!item.isRead && <a data-news-id={item.id}>【{item.msgType == '2' ? '查看评论' : '标为已读'}】</a>}
                    </div>
                    <div className="item-div-right">
                        <span>{item.msgDate}</span><a>{item.msgTime}</a>
                    </div>
                </div>
            ))
        }
    </div>
)

class NewsTitle extends React.Component {
    constructor(props) {
        super(props);
        this.titleClick = this.titleClick.bind(this);
    }
    titleClick(param, e) {
        const eleList = document.getElementsByClassName('title');
        for(let i =0,len = eleList.length; i < len; i++) {
            eleList[i].className = 'title';
        }
        e.currentTarget.className = 'title title-hover';
        this.props.handleChange(param);
    }
    render() {
        return(
            <div className="NewsTitle">
                <span className="title title-hover" onClick={this.titleClick.bind(this,'1')}>系统消息</span>
                <span className="title" onClick={this.titleClick.bind(this,'2')}>用户评论</span>
                <span className="title" onClick={this.titleClick.bind(this,'3')}>互动消息</span>
            </div>
        );
    }
}

class MyNews extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {newsData: sysData};
    }
    handleChange(param,e) {
        if(param == '1'){
            this.setState({newsData: sysData});
        }else if(param == '2') {
            this.setState({newsData: comData});
        } else {
            this.setState({newsData: intData});
        }
    }
    render() {
        return(
            <div className="MyNews">
                <style dangerouslySetInnerHTML={{ __html: newsCss }} />
                <UserLayout>
                    <div className="news-container">
                        <NewsTitle handleChange={this.handleChange}/>
                        <NewsItem newsData={this.state.newsData}/>
                    </div>
                </UserLayout>
            </div>
        );
    }
}

export default MyNews;