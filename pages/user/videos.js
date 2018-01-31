import React from 'react'
import Link from 'next/link'
import {UserLayout} from '../../components/user-components/userLayout'
import {ProfileVideos} from '../../components/user-components/userVideoItem'

import videosCss from 'styles/u-videos.scss'


const videos = [
    {id: 1, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:20',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '323504', videoComs: '504', videoFans:'789', time:'2016.12.30', videoStatus: '1', isRecommend: true},
    {id: 2, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:20',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '323504', videoComs: '504', videoFans:'789', time:'2016.12.30', videoStatus: '1', isRecommend: false},
    {id: 3, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:20',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '323504', videoComs: '504', videoFans:'789', time:'2016.12.30', videoStatus: '1', isRecommend: false},
    {id: 4, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:20',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '323504', videoComs: '504', videoFans:'789', time:'2016.12.30', videoStatus: '0', isRecommend: false},
    {id: 5, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:20',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '323504', videoComs: '504', videoFans:'789', time:'2016.12.30', videoStatus: '1', isRecommend: false},
    {id: 6, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:20',videoName:'白哦体白白哦体白哦体白哦',
        videoPlays: '323504', videoComs: '504', videoFans:'789', time:'2016.12.30', videoStatus: '0', isRecommend: false},
    {id: 7, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:20',videoName:'白哦体白哦体白哦体白哦体白白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '323504', videoComs: '504', videoFans:'789', time:'2016.12.30', videoStatus: '1', isRecommend: false},
    {id: 8, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:20',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦哦体白哦体白哦体白哦体白哦',
        videoPlays: '323504', videoComs: '504', videoFans:'789', time:'2016.12.30', videoStatus: '0', isRecommend: true},
];
function retriveVideo(param) {
    let videoList = videos;
    if(!param || param == '2') {
        console.log('没有任何更改');
    }else {
        videoList = videos.filter((value) => {
            return value.videoStatus == param;
        })
    }
    return videoList;
}

class MyVideos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {videos};
        this.changeVideos = this.changeVideos.bind(this);
    }
    changeVideos(param, e) {
        const eleList = document.getElementsByClassName('title');
        for(let i =0,len = eleList.length; i < len; i++) {
            eleList[i].className = 'title';
        }
        e.currentTarget.className = 'title title-hover';
        let list = retriveVideo(param);
        this.setState({videos: list});
    }
    render() {
        return(
            <div className="MyVideos">
                <style dangerouslySetInnerHTML={{ __html: videosCss }} />
                <UserLayout>
                    <div className="my-videos">
                        <div className="videos-title">
                            <span className="title title-hover" onClick={this.changeVideos.bind(this, '2')}>全部</span>
                            <span className="title" onClick={this.changeVideos.bind(this, '1')}>已发布</span>
                            <span className="title" onClick={this.changeVideos.bind(this, '0')}>未发布</span>
                        </div>
                        <div className="video-container">
                            <ProfileVideos videos={this.state.videos} type="2"/>
                        </div>
                    </div>
                </UserLayout>
            </div>
        )
    }
}

export default MyVideos;