import React from 'react'

import videoItem from 'styles/c-userVideoItem.scss'

class VideoItem extends React.Component {
    render() {
        return(
            <div className="VideoItem">
                {/*<style dangerouslySetInnerHTML={{ __html: videoItem }} />*/}
                <div className="video-img">
                    <img src={this.props.item.videHref}/>
                    <div className="video-play-time">{this.props.item.videDuration}</div>
                </div>
                <div className="video-info">
                    <div className="video-name">{this.props.item.videoName}</div>
                    <div className="video-show">
                        <div><img src="/static/images/u-video-play.png"/><span>{this.props.item.videoPlays}</span></div>
                        <div><img src="/static/images/u-video-com.png"/><span>{this.props.item.videoComs}</span></div>
                        <div><img src="/static/images/u-video-play.png"/><span>{this.props.item.videoFans}</span></div>
                    </div>
                    <div className="video-titme">{this.props.item.time}</div>
                    <div  className="video-opertate">
                        {this.props.type == '2' && <a className="a-not-hover">编辑</a>}
                        <a>删除</a>
                        <a>查看评论</a>
                    </div>
                </div>
            </div>
        );
    }
}

const array = [
    {id: 1, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:20',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '323504', videoComs: '504', videoFans:'789', time:'2016.12.30'},
    {id: 2, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:20',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '323504', videoComs: '504', videoFans:'789', time:'2016.12.30'},
    {id: 3, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:20',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '323504', videoComs: '504', videoFans:'789', time:'2016.12.30'},
    {id: 4, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:20',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '323504', videoComs: '504', videoFans:'789', time:'2016.12.30'},
    {id: 5, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:20',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '323504', videoComs: '504', videoFans:'789', time:'2016.12.30'},
    {id: 6, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:20',videoName:'白哦体白白哦体白哦体白哦',
        videoPlays: '323504', videoComs: '504', videoFans:'789', time:'2016.12.30'},
    {id: 7, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:20',videoName:'白哦体白哦体白哦体白哦体白白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '323504', videoComs: '504', videoFans:'789', time:'2016.12.30'},
    {id: 8, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:20',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦哦体白哦体白哦体白哦体白哦',
        videoPlays: '323504', videoComs: '504', videoFans:'789', time:'2016.12.30'},
]

class ProfileVideos extends React.Component {
    render() {
        const lists = array;
        return(
            <div className="ProfileVideos">
                <style dangerouslySetInnerHTML={{ __html: videoItem }} />
                {
                    lists.map((list) => (
                        <VideoItem key={list.id} item={list} type="1"/>
                    ))
                }
            </div>
        )
    }
}

export {ProfileVideos};