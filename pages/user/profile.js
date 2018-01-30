import React from 'react'
import Link from 'next/link'
import {UserLayout} from '../../components/user-components/userLayout'
import {ProfileVideos} from '../../components/user-components/userVideoItem'
import {UserInfo, UserAnalysis, PorfileRightTop} from '../../components/user-components/userProfile'

import profileCss from 'styles/u-profile.scss'

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
                                <ProfileVideos />
                            </div>
                        </div>
                    </div>
                </UserLayout>
            </div>
        )
    }
}

export default UserProfile;