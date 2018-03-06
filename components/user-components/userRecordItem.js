import React from 'react'

import recordItemCss from 'styles/c-userRecordItem.scss'

class RecordItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteVideo = this.deleteVideo.bind(this);
    }
    deleteVideo (e) {
        console.log(e.currentTarget.dataset.videoId);
    }
    render() {
        return(
            <div className="RecordItem">
                <div className="video-cover">
                    <img src={this.props.record.videHref} />
                    <span className="video-duration">{this.props.record.videDuration}</span>
                    {
                        this.props.type == '0' && <div className="video-delete" data-video-id={this.props.record.id} onClick={this.deleteVideo}>
                            <img src="/static/images/pop-remove-btn.png"/>
                        </div>
                    }
                    <div className="video-mask">
                        <img src="/static/images/v-play-btn.png"/>
                    </div>
                </div>
                <div className="video-info">
                    <div className="video-name">{this.props.record.videoName}</div>
                    <div className="video-others">
                        {this.props.record.videoPlays}次观看.{this.props.record.lastTime}分钟前
                    </div>
                </div>
            </div>
        );
    }
}

class WatchRecords extends React.Component {
    render() {
        return(
            <div className="WatchRecords clearfix">
                <style dangerouslySetInnerHTML={{ __html: recordItemCss }} />
                {
                    this.props.recordList.map((item) => <RecordItem record={item} key={item.id} type={this.props.type}/>)
                }
            </div>
        );
    }
}

export {WatchRecords};