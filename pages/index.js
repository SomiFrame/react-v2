import Layout from '../components/layout'
import React from 'react'
import ListItem from '../components/listItem'
import 'isomorphic-unfetch'
import HotItem from '../components/hotItem'
import Router from 'next/router'

import stylesheet from 'styles/index.scss'
class Index extends React.Component {
    static async getInitialProps({ req }) {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        const res = await fetch('https://api.github.com/repos/zeit/next.js')
        const json = await res.json()
        const router = Router
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
        let hotItems = [];
        return {
            stars: json.stargazers_count,
            userAgent,
            router,
            listItems: listItems
        }
    }
    constructor(props) {
        super(props)
        this.state = props;
        console.log(this.state);
    }
    render() {
        const object = {
            title: '猜你喜欢',
            mid_child : <ListItem listItems={this.state.listItems}/>,
            right_child : <HotItem hotItems={this.state.hotItems}/>
        }
        return (
            <div>
                <Layout object={object}>
                    {/* <div>hellp {this.props.userAgent}</div> */}
                    {/* <div>{this.props.stars}</div> */}
                </Layout>
            </div>
        )
    }
}
export default Index;