import React from 'react'

import videoItem from 'styles/c-userVideoItem.scss'

class VideoItem extends React.Component {
    render() {
        return(
            <div className="VideoItem">
                <style dangerouslySetInnerHTML={{ __html: videoItem }} />
                <div className="video-img">
                    <img src="http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg"/>
                    <div className="video-play-time">08:20</div>
                </div>
                <div className="video-info">
                    <div className="video-name">白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦</div>
                    <div className="video-show">
                        <div><img src="/static/images/u-video-play.png"/><span>323504</span></div>
                        <div><img src="/static/images/u-video-com.png"/><span>504</span></div>
                        <div><img src="/static/images/u-video-play.png"/><span>789</span></div>
                    </div>
                    <div className="video-titme">2016.12.30</div>
                    <div  className="video-opertate">
                        <a className="a-not-hover">编辑</a>
                        <a>删除</a>
                        <a>查看评论</a>
                    </div>
                </div>
            </div>
        );
    }
}

export {VideoItem};