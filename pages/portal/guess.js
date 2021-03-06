import Layout from '../../components/layout'
import React from 'react'
import ListItem from '../../components/listItem'
import 'isomorphic-unfetch'
import HotItem from '../../components/hotItem'
import Router from 'next/router'
import News from '../../components/news'
import Carousel from '../../components/carousel'

class Index extends React.Component {
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
        let carouselItems = [
            {
                link: 'http://www.google.com',
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
                link: 'http://www.google.com',
                name: '',
                title: '测试',
                img_url: 'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',
                duration: '1:58',
                type: '自拍',
                author: 'toro',
                play_count: 12352312,
                released: '41分钟前'
            },
            {
                link: 'http://www.google.com',
                name: '',
                title: 'safoiuwer',
                img_url: 'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',
                duration: '1:58',
                type: '自拍',
                author: 'toro',
                play_count: 12352312,
                released: '41分钟前'
            }
        ]
        return {
            listItems,
            hotItems,
            carouselItems,
            Router
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
                <Layout right_content={right_content} Router={this.props.Router}>
                    <Carousel lists={this.state.carouselItems}/>
                    <label className="page-title">
                        {'猜你喜欢'}
                    </label>
                    <News />
                    <ListItem listItems={this.state.listItems} />
                </Layout>
            </div>
        )
    }
}
export default Index;