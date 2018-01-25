import React from 'react'
import Link from 'next/link'
import {UserSider} from './userNavigate'
import {UserHeader} from './userHeader'
import {Footer} from './userFooter'

const userInfo = {
    isLogin: true,
    name: '我是这样的Toro',
    headerHref: '/static/images/header.jpg'
};
class UserLayout extends React.Component {
    render() {
        return(
            <div className="UserLayout">
                <UserSider />
                <UserHeader userInfo={userInfo}/>
                <Footer />
            </div>
        )
    }
}

export {UserLayout};