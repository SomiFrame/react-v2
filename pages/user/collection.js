import React from 'react'
import {UserLayout} from '../../components/user-components/userLayout'
import {WatchRecords} from '../../components/user-components/userRecordItem'
import {PopBox} from '../../components/user-components/userPop'

import collectionsCss from 'styles/u-collection.scss'

const recordList =[
    {id: 1, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'08:32',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '323504', lastTime:'1'},
    {id: 2, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'10:31',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '457857', lastTime:'2'},
    {id: 3, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'12:02',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '227527', lastTime:'3'},
    {id: 4, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'20:12',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '575', lastTime:'4'},
    {id: 5, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'30:03',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '2427', lastTime:'5'},
    {id: 6, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'56:31',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '3659', lastTime:'6'},
    {id: 7, videHref:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',videDuration:'67:00',videoName:'白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦体白哦',
        videoPlays: '452', lastTime:'7'},
];

class PopContent extends React.Component {
    constructor(props) {
        super(props);
        this.clickCertain = this.clickCertain.bind(this);
        this.clickCancel = this.clickCancel.bind(this);
    }
    clickCertain(e) {
        console.log('删除确定按钮删除的Video ID : ' + e.currentTarget.dataset.videoId);
    }
    clickCancel(e) {
        const pop = document.getElementById('PopBox');
        if(pop.style.display=="none") {
            pop.style.display="block";
        } else {
            pop.style.display="none";
        }
    }
    render() {
        return(
            <div className="popContent">
                <div>你确定删除该视频吗？</div>
                <button id="collection-certain" data-video-id="" onClick={this.clickCertain}>确定</button>
                <button onClick={this.clickCancel}>取消</button>
            </div>
        );
    }
}

class UserRecords extends React.Component {
    render() {
        return(
            <div className="UserRecords">
                <style dangerouslySetInnerHTML={{ __html: collectionsCss }} />
                <UserLayout>
                    <div className="records-container">
                        <div className="records-title">我的收藏</div>
                        <div className="records-content">
                            <WatchRecords recordList={recordList} type="0"/>
                        </div>
                    </div>
                    <PopBox>
                        <PopContent />
                    </PopBox>
                </UserLayout>
            </div>
        );
    }
}

export default UserRecords;