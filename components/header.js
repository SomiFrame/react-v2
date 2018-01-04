import React from 'react'
import Link from 'next/link'
import HeaderCss from '../styles/c-header.scss'
class Header extends React.Component {
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: HeaderCss }} />
                <div className="layout-header">
                    <ul>
                        <li className="header-left">
                            <div className="app-download">
                                <a className="app-download-link" href="http://www.google.com"> 下载APP </a>
                            </div>
                        </li>
                        <li className="header-middle"></li>
                        <li className="header-right">
                            <div>
                                <Link href="/login">
                                    <a className="link-login" > 登陆 </a>
                                </Link>
                                <a className="link-upload"> 上传视频 </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header