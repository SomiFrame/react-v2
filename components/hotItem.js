import { Component } from 'react'
import Link from 'next/link'
import Css from '../styles/c-hotItem.scss'
class HotItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: Css }} />
                <ul className="hot-container">
                    <li className="list-title">
                        <label>热门视频</label>
                    </li>
                    {
                        this.props.hotItems.map((item, index) =>
                            <li className="list-item" key={index}>
                                <div className="list-item clearfix">
                                    <div className="item-left">
                                        <Link href="">
                                            <a>
                                                <img src={item.img_url} />
                                                <div className="time-container">
                                                    <label>{item.duration}</label>
                                                    <div className="label-background"></div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="item-right">
                                        <Link href="">
                                            <a className="item-title">
                                                {item.title}
                                            </a>
                                        </Link>
                                        <div className="item-option">
                                            {item.play_count}次播放
                                        <div className="period">.</div>
                                            {item.released}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
export default HotItem