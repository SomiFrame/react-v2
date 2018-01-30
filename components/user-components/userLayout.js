import React from 'react'
import Link from 'next/link'
//引起了 Uncaught (in promise) TypeError: Cannot read property 'join' of undefined 这个问题
// import Head from 'next/head'
import {UserSider} from './userNavigate'
import {UserHeader} from './userHeader'
import {Footer} from './userFooter'

import LayoutCss from 'styles/c-layout.scss'

const userInfo = {
    isLogin: true,
    name: '我是这样的Toro',
    headerHref: '/static/images/header.jpg'
};
class UserLayout extends React.Component {
    render() {
        return(
            <div>
                <style dangerouslySetInnerHTML={{ __html: LayoutCss }} global="true" />
                {/*
                 <Head>
                     <title>{this.props.title}</title>
                     <meta charSet='utf-8' />
                     <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                     <style dangerouslySetInnerHTML={{ __html: LayoutCss }} global="true" />
                 </Head>
                */}
                <div className="UserLayout">
                    <UserSider />
                    <UserHeader userInfo={userInfo}/>
                    {this.props.children}
                    <Footer />
                </div>
            </div>
        )
    }
}

export {UserLayout};