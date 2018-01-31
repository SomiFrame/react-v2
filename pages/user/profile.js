import React from 'react'
import Link from 'next/link'
import {UserLayout} from '../../components/user-components/userLayout'
import {ProfileVideos} from '../../components/user-components/userVideoItem'
import {UserInfo, UserAnalysis, PorfileRightTop} from '../../components/user-components/userProfile'

import profileCss from 'styles/u-profile.scss'


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

class UserProfile extends React.Component {
    render() {
        return(
            <div className="UserIndex">
                <style dangerouslySetInnerHTML={{ __html: profileCss }} />
                <UserLayout>
                    <div className="UserProfile">
                        <div className="profile-left">
                            <UserInfo />
                            <UserAnalysis />
                        </div>
                        <div className="profile-right">
                            <PorfileRightTop />
                            <div className="profile-right-videos">
                                <div className="right-videos-title">
                                    我的视频<Link href="/user/videos"><a>查看更多 &gt;</a></Link>
                                </div>
                                <ProfileVideos videos={array} type="1"/>
                            </div>
                        </div>
                    </div>
                </UserLayout>
            </div>
        )
    }
}

export default UserProfile;