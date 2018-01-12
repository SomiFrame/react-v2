import {Component} from 'react'
import Link from 'next/link'
import Css from '../styles/c-hotItem.scss'
class HotItem extends Component {
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: Css }} />
                <ul className="hot-container">
                    <li className="list-title">
                        <label>热门视频</label>
                    </li>    
                    <li className="list-item">
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
                                    1232121次播放
                                    <div className="period">.</div>
                                    41分钟前
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-item">
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
                                    1232121次播放
                                    <div className="period">.</div>
                                    41分钟前
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default HotItem