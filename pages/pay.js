import $ from "jquery"
import Layout from '../components/layout'
import React from 'react'
import {VipPackage, VipPrevilige} from '../components/payPackage'
import 'isomorphic-unfetch'
import HotItem from '../components/hotItem'
import Router from 'next/router'

import stylesheet from 'styles/pay.scss'

class Pay extends React.Component {
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
        let vipInfos = [
            {isLogin: true, key: '1', vipType: '3个月', vipPrice: '188.00', vipDescript: '特惠充值3个月会员免费续曾10天', recommend:'火爆1.90/天'},
            {isLogin: true, key: '2', vipType: '6个月', vipPrice: '328.00', vipDescript: '特惠充值6个月会员免费续曾25天', recommend:'火爆1.60/天'},
            {isLogin: true, key: '3', vipType: '年费', vipPrice: '498.00', vipDescript: '特惠充值年费会员免费续曾60天', recommend:'火爆1.20/天'},
            {isLogin: false, key: '4', vipType: '1个月', vipPrice: '70.00', vipDescript: '特惠充值月度会员免费续曾3天', recommend:'火爆2.10/天'}
        ];
        return {
            listItems,
            hotItems,
            vipInfos
        }
    }
    constructor(props) {
        super(props)
        this.state = props;
    }
    render() {
        const right_content = <HotItem hotItems={this.state.hotItems} />
        return (
            <div className="Pay" >
                <Layout right_content={right_content}>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <div className="pay-content">
                        <div className="title"><div>VIP套餐</div></div>
                        <div className="pay-package">
                            {this.props.vipInfos.map(
                                (info) => <VipPackage key={info.key} vipInfo={info} />
                            )}
                        </div>
                        <div className="title"><div>VIP特权</div></div>
                        <div>
                            <VipPrevilige />
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default Pay;