import Layout from '../../components/layout'
import React from 'react'
import ListItem from '../../components/listItem'
import 'isomorphic-unfetch'
import HotItem from '../../components/hotItem'
import Router from 'next/router'
import News from '../../components/news'
class Selfie extends React.Component {
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
        let hotItems = [];
        return {
            listItems,
            hotItems,
            Router
        }
    }
    constructor(props) {
        super(props)
        this.state = props;
    }
    render() {
        const right_content = <HotItem hotItems={this.props.hotItems} />
        return (
            <div>
                <Layout title={'V2视频-网友自拍'} right_content={right_content} Router={this.props.Router}>
                    <label className="page-title">
                        {'网友自拍'}
                    </label>
                    <News />
                    <ListItem listItems={this.state.listItems} />
                </Layout>
            </div>
        )
    }
}
export default Selfie ;