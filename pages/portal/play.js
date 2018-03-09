import { Component, Fragment } from 'react'
import Router from 'next/router'
import Layout from '../../components/layout'
import HotItem from '../../components/hotItem'
import Css from '../../styles/play.scss'
import Link from 'next/link'
import ListItem from '../../components/listItem'
import Player from '../../components/VideoPlayer'
class Play extends Component {
    static async getInitialProps({ req }) {
        let listItems = [
            {
                name: '',
                title: 'DifferBetween HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5 Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5p',
                img_url: 'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',
                duration: '1:58',
                type: '自拍',
                author: 'toro',
                play_count: 12352312,
                released: '41分钟前'
            },
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
            hotItems,
            listItems
        }
    }
    constructor(props) {
        super(props)
        this.state = this.props;
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
        this.handleThumbSubmit = this.handleThumbSubmit.bind(this)
    }

    render() {
        const videoJsOptions = {
            controls: true,
            plugins: {
                vastClient: {
                    //adTagUrl: 'http://servedby.flashtalking.com/imp/1/31714;812030;208;xml;DailyMail;640x360VASTHTML5/?cachebuster=%%CACHEBUSTER%%',
                    adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=%2F124319096%2Fexternal%2Fsingle_ad_samples&ciu_szs=300x250&gdfp_req=1&env=vp&output=xml_vast3&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=1348156666948684&eid=324123020&sdkv=h.3.193.2&sdki=3c0d&scor=2474487070519334&adk=2362470801&u_so=l&osd=2&frm=0&sdr=1&is_amp=0&afvsz=200x200%2C250x250%2C300x250%2C336x280%2C450x50%2C468x60%2C480x70%2C728x90&url=https%3A%2F%2Ffoliovision.com%2Fplayer%2Fvast%2Fsample-vast-tags&ged=ve4_td1541_tt0_pd1541_la1541000_er332.10.489.310_vi121.0.1082.922_vp100_eb24171',
                    adCancelTimeout: 5000,
                    playAdAlways: true,
                    adsEnabled: true
                }
            },
            sources: [{
                src: 'https://s3.amazonaws.com/_bc_dml/example-content/sintel_dash/sintel_vod.mpd',
                type: 'application/dash+xml'
            }]
        }
        const right_content = <HotItem hotItems={this.props.hotItems} />
        return (
            <Fragment>
                <style dangerouslySetInnerHTML={{ __html: Css }} />
                <Layout right_content={right_content} Router={this.props.Router}>
                    <label className="page-title">
                        {'播放页'}
                    </label>
                    <div className="player">
                        <Player {...videoJsOptions}></Player>
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
                                        <img src={' https://i.ytimg.com/vi/BS9EMp7NXuE/hqdefault_live.jpg?sqp=CIyyptMF-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBfjqCJqhtblNZczZI269peJ4P7uA '} />
                                        <label className="live-status">
                                            {'正在直播'}
                                        </label>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    <a className="live-link">
                                        <img src={' https://i.ytimg.com/vi/BS9EMp7NXuE/hqdefault_live.jpg?sqp=CIyyptMF-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBfjqCJqhtblNZczZI269peJ4P7uA '} />
                                        <label className="live-status">
                                            {'正在直播'}
                                        </label>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    <a className="live-link">
                                        <img src={' https://i.ytimg.com/vi/BS9EMp7NXuE/hqdefault_live.jpg?sqp=CIyyptMF-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBfjqCJqhtblNZczZI269peJ4P7uA '} />
                                        <label className="live-status">
                                            {'正在直播'}
                                        </label>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    <a className="live-link">
                                        <img src={' https://i.ytimg.com/vi/BS9EMp7NXuE/hqdefault_live.jpg?sqp=CIyyptMF-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBfjqCJqhtblNZczZI269peJ4P7uA '} />
                                        <label className="live-status">
                                            {'正在直播'}
                                        </label>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="comment-block">
                        <span className="comment-count">{12}</span>
                        <span>条评论</span>
                        <form className="form-block">
                            <img src={'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg'} className="user-avatar" />
                            <input className="comment-input" placeholder="写下你的评论...." />
                            <button onClick={this.handleCommentSubmit} className="comment-button">
                                评论
                            </button>
                        </form>
                        <ul className="comment-list-block">
                            <li>
                                <div className="list-item">
                                    <div className="item-top">
                                        <img src={'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg'} className="user-avatar" />
                                        <span className="user-name">{'龙傲天'}</span>
                                        <span className="comment-time">{'9天前'}</span>
                                    </div>
                                    <div className="item-bottom clearfix">
                                        <label>{'以前好像上过电视'}</label>
                                        <div className="like-container">
                                            <span className="like-count">{703}</span>
                                            <button onClick={this.handleThumbSubmit} className={this.state.thumb ? "button-like active" : "button-like"}></button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="more-recommend">
                        <div className="recommend-title">
                            更多推荐
                        </div>
                        <ListItem listItems={this.props.listItems} />
                    </div>
                </Layout>
            </Fragment>
        )
    }
    handleCommentSubmit(e) {
        console.log(e);

    }
    handleThumbSubmit(e) {
        this.setState((prevState, props) => ({
            thumb: !prevState.thumb
        }))
    }
}
export default Play