import { Component } from 'react'
import Link from 'next/link'
import Css from '../styles/c-listItem.scss'
class ListItem extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: Css }} />
                <ul className="list-container">
                    <li>
                        <div className="list-item clearfix">
                            <div className="item-left">
                                <Link href="">
                                    <a>
                                        <img src="http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg" />
                                        <div className="time-container">
                                            <label>1:58</label>
                                            <div className="label-background"></div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="item-right">
                                <Link href="">
                                    <a className="item-title">
                                        Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5
                                        Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5p
                                    </a>
                                </Link>
                                <div className="item-option">
                                    <Link href="">
                                        <a className="item-type">
                                        {'自拍'}
                                        </a>
                                    </Link>
                                    <Link href="">
                                        <a className="item-user">
                                            {'show搜趣坊'}
                                        </a>
                                    </Link>
                                    <div className="period">.</div>
                                    1232121次播放
                                    <div className="period">.</div>
                                    41分钟前
                                </div>
                                <div className="ad-block">
                                    <Link href="">
                                        <a className="ad-link">
                                            {
                                                '推荐：宝马娱乐乐开户就送８８８８元，宝马娱乐开户'
                                            }
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default ListItem