import React from 'react'
import {UserLayout} from '../../components/user-components/userLayout'
import {WatchRecords} from '../../components/user-components/userRecordItem'

import recordsCss from 'styles/u-records.scss'

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
]

class UserRecords extends React.Component {
    render() {
        return(
            <div className="UserRecords">
                <style dangerouslySetInnerHTML={{ __html: recordsCss }} />
                <UserLayout>
                    <div className="records-container">
                        <div className="records-title">观看记录</div>
                        <div className="records-content">
                            <WatchRecords recordList={recordList} type="0"/>
                        </div>
                    </div>
                </UserLayout>
            </div>
        );
    }
}

export default UserRecords;