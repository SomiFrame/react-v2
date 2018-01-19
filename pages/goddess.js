import Layout from '../components/layout'
import React from 'react'
import 'isomorphic-unfetch'
import HotItem from '../components/hotItem'
import Router from 'next/router'
import News from '../components/news'
import VideoGrid from '../components/videoGrid'

class Goddess extends React.Component {
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
                released: '41分钟前',
                href: 'http://www.google.com'
            },
            {
                name: '',
                title: 'DifferBetween HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5 Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5Differences Between HTML 4.01 and HTML5p',
                img_url: 'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',
                duration: '1:58',
                type: '自拍',
                author: 'toro',
                play_count: 12352312,
                released: '41分钟前',
                href: 'http://www.google.com'
            }
        ];
        let hotItems = [];
        return {
            listItems,
            hotItems
        }
    }
    constructor(props) {
        super(props)
        this.state = props;
    }
    render() {
        const right_content = <HotItem hotItems={this.state.hotItems} />
        return (
            <div>
                <Layout right_content={right_content}>
                    <label className="page-title">
                        {'女神直播'}
                    </label>
                    <News />
                    <VideoGrid videoGrids={this.state.listItems} />
                </Layout>
            </div>
        )
    }
}
export default Goddess;