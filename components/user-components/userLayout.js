import React from 'react'
import Link from 'next/link'
import {UserSider} from './userNavigate'
import {UserHeader} from './userHeader'

class UserLayout extends React.Component {
    render() {
        return(
            <div className="UserLayout">
                <UserSider />
                <UserHeader />
            </div>
        )
    }
}

export {UserLayout};