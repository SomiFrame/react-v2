import React from 'react'

import videoItem from 'styles/c-userVideoItem.scss'

class VideoItem extends React.Component {
    render() {
        return(
            <div className="VideoItem clearfix">
                {/*<style dangerouslySetInnerHTML={{ __html: videoItem }} />*/}
                <div className="video-img">
                    <img src={this.props.item.videHref}/>
                    <div className="video-play-time">{this.props.item.videDuration}</div>
                    {
                        (this.props.type == '2' && this.props.item.videoStatus == '0')
                        && <div className="video-status"></div>
                    }
                </div>
                <div className={this.props.type == 2 ? "video-info video-info-2" : "video-info"}>
                    <div className="video-name">{this.props.item.videoName}</div>
                    <div className="video-show">
                        <div><img src="/static/images/u-video-play.png"/><span>{this.props.item.videoPlays}</span></div>
                        <div><img src="/static/images/u-video-com.png"/><span>{this.props.item.videoComs}</span></div>
                        <div><img src="/static/images/u-video-fans.png"/><span>{this.props.item.videoFans}</span></div>
                        {
                            this.props.type == '2' && (<div><img src="/static/images/u-video-release.png"/><span>{this.props.item.videoFans}</span></div>)
                        }
                    </div>
                    <div className="video-titme">{this.props.item.time}</div>
                    <div  className="video-opertate">
                        {this.props.type == '2' && <a className={this.props.item.videoStatus == '1' ? 'a-not-hover' : ''}>编辑</a>}
                        <a>删除</a>
                        <a>查看评论</a>
                    </div>
                </div>
                {this.props.item.isRecommend && <div className="video-recommend">推荐</div> }
            </div>
        );
    }
}

class ProfileVideos extends React.Component {
    render() {
        return(
            <div className="ProfileVideos">
                <style dangerouslySetInnerHTML={{ __html: videoItem }} />
                {
                    this.props.videos.map((list) => (
                        <VideoItem key={list.id} item={list} type={this.props.type}/>
                    ))
                }
            </div>
        )
    }
}

export {ProfileVideos};