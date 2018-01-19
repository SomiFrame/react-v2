import $ from "jquery"
import Layout from '../components/layout'
import React from 'react'
import 'isomorphic-unfetch'
import HotItem from '../components/hotItem'
import Router from 'next/router'
import {BeautyList} from '../components/beautyItem'

import beautyCss from 'styles/beauty.scss'

class Beauty extends React.Component {
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
        let beautyLists = [
            {id: 1, beautyImg:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',live_status: 0,one_to_many_status: 0,name:'仔仔的宝宝1',fans: '456654', liveHref: 'http://www.baidu.com'},
            {id: 2, beautyImg:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',live_status: 1,one_to_many_status: 1,name:'仔仔的宝宝2',fans: '757', liveHref: 'http://www.baidu.com'},
            {id: 3, beautyImg:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',live_status: 1,one_to_many_status: 1,name:'仔仔的宝宝3',fans: '22', liveHref: 'http://www.baidu.com'},
            {id: 4, beautyImg:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',live_status: 1,one_to_many_status: 1,name:'仔仔的宝宝4',fans: '4757', liveHref: 'http://www.baidu.com'},
            {id: 5, beautyImg:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',live_status: 1,one_to_many_status: 0,name:'仔仔的宝宝5',fans: '2774', liveHref: 'http://www.baidu.com'},
            {id: 6, beautyImg:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',live_status: 1,one_to_many_status: 0,name:'仔仔的宝宝6',fans: '757', liveHref: 'http://www.baidu.com'},
            {id: 7, beautyImg:'http://www.videaba.cn/Uploads/Store/2016-04-07/xia.jpg',live_status: 0,one_to_many_status: 0,name:'仔仔的宝宝7',fans: '757', liveHref: 'http://www.baidu.com'},
        ]
        return {
            listItems,
            hotItems,
            beautyLists
        }
    }
    constructor(props) {
        super(props)
        this.state = props;
    }
    render() {
        const right_content = <HotItem hotItems={this.state.hotItems} />
        return (
            <div className="Beauty" >
                <style dangerouslySetInnerHTML={{ __html: beautyCss }} />
                <Layout right_content={right_content}>
                    <BeautyList beautyLists={this.props.beautyLists} />
                    <div className="beauty-get-more">点击加载更多<img src="/static/images/v2-getmore.png"/></div>
                </Layout>
            </div>
        )
    }
}

export default Beauty;