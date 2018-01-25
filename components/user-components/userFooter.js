import React from 'react'
import Link from 'next/link'

import footerCss from 'styles/c-userFooter.scss'

class Footer extends React.Component {
    render() {
        return(
            <div className="Footer">
                <style dangerouslySetInnerHTML={{ __html: footerCss }} />
                <div>
                    <div className="footer-first">
                        警告: 此网站只适合十八岁或以上人士观看, 此网站内容可能令人反感；不可将此区域的内容派发，传阅，出售，出租，交给或者
                        借予年龄未满18岁的人士或将本网站内容向该人士出售，播放或放映，如果你是该影片的版权方所有者而要求删除影片的，请联系
                        我们，我们会很快做出回复。
                    </div>
                    <div className="footer-second">
                        <ul>

                            <li>
                                <Link href="http://www.baidu.com"><a>常见问题</a></Link>
                                <span>|</span>
                            </li>
                            <li>
                                <Link href="http://www.baidu.com"><a>联系我们</a></Link>
                                <span>|</span>
                            </li>
                            <li>
                                <Link href="http://www.baidu.com"><a>隐私政策</a></Link>
                                <span>|</span>
                            </li>
                            <li>
                                <Link href="http://www.baidu.com"><a>用户协议</a></Link>
                                <span>|</span>
                            </li>
                            <li>
                                <Link href="http://www.baidu.com"><a>DMCA</a></Link>
                                <span>|</span>
                            </li>
                            <li>
                                <Link href="http://www.baidu.com"><a>访问指南</a></Link>
                                <span>|</span>
                            </li>
                            <li>
                                <Link href="http://www.baidu.com"><a>最新地址</a></Link>
                                <span>|</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-third">Copyright @ 2018 www.v2porn.com, All Rights</div>
                </div>
            </div>
        );
    }
}

export {Footer};