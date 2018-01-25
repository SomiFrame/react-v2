import { Component, Fragment } from 'react'
import Router from 'next/router'
import Layout from '../../components/layout'
import HotItem from '../../components/hotItem'
import Css from '../../styles/play.scss'
import Link from 'next/link'
class Play extends Component {
    static async getInitialProps({ req }) {
        let hotItems = [
            {
                name: '',
                title: 'DifferBetween HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5 Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5p',
                img_url: 'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',
                duration: '1:58',
                type: '自拍',
                author: 'toro',
                play_count: 12352312,
                released: '41分钟前'
            }
        ];
        return {
            Router,
            hotItems
        }
    }
    render() {
        const right_content = <HotItem hotItems={this.props.hotItems} />
        return (
            <Fragment>
                <style dangerouslySetInnerHTML={{ __html: Css }} />
                <Layout right_content={right_content} Router={this.props.Router}>
                    <label className="page-title">
                        {'播放页'}
                    </label>
                    <div className="player">
                    </div>
                    <label className="video-title">
                        {'Best Gaming Music Mix 2018 ♫ 🎮24/7 Music Live Stream | Gaming Music / Electronic Radio 🎧'}
                    </label>
                    <div className="video-bottom-block clearfix">
                        <div className="block-author">
                            {'video author'}
                        </div>
                        <div className="block-play-count">
                            <label>{'235'}</label>
                            次播放
                        </div>
                    </div>
                    <div className="live-list">
                        <div className="list-title">
                        {'女神直播'}
                        </div>
                        <ul className="list-content">
                            <li>
                                <Link href={''}>
                                    <a className="live-link">
                                        <img src={' https://i.ytimg.com/vi/BS9EMp7NXuE/hqdefault_live.jpg?sqp=CIyyptMF-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBfjqCJqhtblNZczZI269peJ4P7uA '}/>
                                        <label className="live-status">
                                        {'正在直播'}
                                        </label>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    <a className="live-link">
                                        <img src={' https://i.ytimg.com/vi/BS9EMp7NXuE/hqdefault_live.jpg?sqp=CIyyptMF-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBfjqCJqhtblNZczZI269peJ4P7uA '}/>
                                        <label className="live-status">
                                        {'正在直播'}
                                        </label>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    <a className="live-link">
                                        <img src={' https://i.ytimg.com/vi/BS9EMp7NXuE/hqdefault_live.jpg?sqp=CIyyptMF-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBfjqCJqhtblNZczZI269peJ4P7uA '}/>
                                        <label className="live-status">
                                        {'正在直播'}
                                        </label>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    <a className="live-link">
                                        <img src={' https://i.ytimg.com/vi/BS9EMp7NXuE/hqdefault_live.jpg?sqp=CIyyptMF-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBfjqCJqhtblNZczZI269peJ4P7uA '}/>
                                        <label className="live-status">
                                        {'正在直播'}
                                        </label>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="comment-block">
                        <div className="comment-submit-block">
                        </div>
                        <div className="comment-list-block"></div>
                    </div>
                </Layout>
            </Fragment>
        )
    }
}
export default Play