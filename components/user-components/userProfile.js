import React from 'react'
import Link from 'next/link'
import  ReactHighcharts from 'react-highcharts';

class UserInfo extends React.Component {
    render() {
        return(
            <div className="UserInfo">
                <img src="/static/images/header.jpg" />
                <div>
                    <p>我是这样的Toro</p>
                    <Link href="/user/index"><a>查看个人主页 &gt;</a></Link>
                </div>
            </div>
        )
    }
}
const  hightOP = {
    chart: {
        spacingTop: 25,
        spacingRight: 30,
        type: 'line',
        height:160,
        },
    title: {
        text: ''
        },
    subtitle: {
        text: ''
        },
    legend: {
        enabled: false
        },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}分数</b>'  // tip显示
        },
    xAxis: {
        lineColor: '#888888',  // 坐标基准线色值
        lineWidth: 2,           // 坐标基准线色值
        tickWidth: 0,
        title: {
            align: 'high',
            offset: 0,
            text: '学期',
            style: {
                color: '#505050',
                fontSize: '12px'
                },
            rotation: 0,
            y: -10,
            x: 28
            },
        categories: ['1', '2', '3', '4', '5'],
        labels: {
            enabled: false      // 禁止标尺
            }
        },
    yAxis: {
        minPadding: 1,
        maxPadding: 1,
        gridLineWidth: 0,   // 隐藏横向网格线
        lineColor: '#888888',
        lineWidth: 2,
        title: {
            align: 'high',
            offset: -10,
            text: '分数',
            style: {
                color: '#505050',
                fontSize: '12px'
                },
            rotation: 0,
            y: -5
            },
        labels: {
            enabled: false  // 禁止标尺
            }
        },
    plotOptions: {
        series: {
            marker: {
                radius: 6,
                fillColor: '#18baa2',
                }
                },
            line: {
                color: '#cbebe6',  // 折线色值
                lineWidth: 8,   // 折线宽度
                dataLabels: {
                    enabled: true,
                    color: '#505050',
                    style: {
                        fontSize: '12px'
                        },
                    y: -10
                    },
                enableMouseTracking: true
                }
            },
        series: [{
        name: '',
        data: [84, 88, 89, 79, 88]
        }],
    credits: {
        enabled: false
        }
    };
class UserAnalysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hightOP};
    }
    render() {
        return(
            <div className="UserAnalysis">
                <div className="analysis-title">
                    分析工具
                    <a>
                        <img src="/static/images/u-profile-anaysis.png"/>过去30天
                    </a>
                </div>
                <div className="analysis-item clearfix">
                    <div className="item-left">
                        <p>3232</p>
                        <span>观看次数</span>
                    </div>
                    <div className="item-right">
                        <ReactHighcharts config={this.state.hightOP}></ReactHighcharts>
                    </div>
                </div>
                <div className="analysis-item">
                    <div className="item-left">
                        <p>305</p>
                        <span>评论数量</span>
                    </div>
                    <div className="item-right">

                    </div>
                </div>
            </div>
        );
    }
}

class PorfileRightTop extends React.Component {
    render() {
        return (
            <div className="PorfileRightTop clearfix">
                <div className="top-right-item">
                    <div className="right-item-top">
                        <img src="/static/images/u-profile-vide.png"/><span>观看次数</span>
                        <img src="/static/images/u-profile-tips.png" className="img2"/>
                    </div>
                    <div className="right-item-content">
                        3232
                    </div>
                </div>
                <div className="top-right-item">
                    <div className="right-item-top">
                        <img src="/static/images/u-profile-comments.png"/><span>评论数量</span>
                        <img src="/static/images/u-profile-tips.png" className="img2"/>
                    </div>
                    <div className="right-item-content">
                        3232
                    </div>
                </div>
                <div className="top-right-item">
                    <div className="right-item-top">
                        <img src="/static/images/u-profile-fans.png"/><span>粉丝数量</span>
                        <img src="/static/images/u-profile-tips.png" className="img2"/>
                    </div>
                    <div className="right-item-content">
                        3232
                    </div>
                </div>
                <div className="top-right-item">
                    <div className="right-item-top">
                        <img src="/static/images/u-profile-points.png"/><span>积分余额</span>
                        <img src="/static/images/u-profile-tips.png" className="img2"/>
                    </div>
                    <div className="right-item-content">
                        3232
                    </div>
                    <Link href="/user/pay"><a>充值</a></Link>
                </div>
            </div>
        )
    }
}

export {UserInfo, UserAnalysis, PorfileRightTop};