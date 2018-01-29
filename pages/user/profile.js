import React from 'react'
import {UserLayout} from '../../components/user-components/userLayout'
import {VideoItem} from '../../components/user-components/userVideoItem'

import profileCss from 'styles/u-profile.scss'

class UserProfile extends React.Component {
    render() {
        return(
            <div className="UserIndex">
                <style dangerouslySetInnerHTML={{ __html: profileCss }} />
                <UserLayout>
                    <div className="UserProfile">
                        <div className="profile-left">
                            
                        </div>
                        <div className="profile-right">
                            <VideoItem />
                        </div>
                    </div>
                </UserLayout>
            </div>
        )
    }
}

export default UserProfile;