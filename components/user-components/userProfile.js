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
var data = [
    [1220832000000, 22.56],
    [1220918400000, 21.67],
    [1221004800000, 21.66],
    [1221091200000, 21.81],
    [1221177600000, 21.28],
    [1221436800000, 20.05],
    [1221523200000, 19.98],
    [1221609600000, 18.26],
    [1221696000000, 19.16],
    [1221782400000, 20.13],
    [1222041600000, 18.72],
    [1222128000000, 18.12],
    [1222214400000, 18.39],
    [1222300800000, 18.85],
    [1222387200000, 18.32],
    [1222646400000, 15.04],
    [1222732800000, 16.24],
    [1222819200000, 15.59],
    [1222905600000, 14.3],
    [1222992000000, 13.87],
    [1223251200000, 14.02],
    [1223337600000, 12.74],
    [1223424000000, 12.83],
    [1223510400000, 12.68],
    [1223596800000, 13.8],
    [1223856000000, 15.75],
    [1223942400000, 14.87],
    [1224028800000, 13.99],
    [1224115200000, 14.56],
    [1224201600000, 13.91]
];

var config = {
    // rangeSelector: {
    //     selected: 1
    // },
    chart: {
        spacingTop: 0,
        spacingRight: 0,
        type: 'line',
        height:85,
    },
    title: {
        text: ''
    },
    legend: {
        enabled: false
    },
    xAxis: {
        lineColor: '#888888',  // 坐标基准线色值
        lineWidth: 0,           // 坐标基准线色值
        tickWidth: 0,
        labels: {
            enabled: false      // 禁止标尺
        }
    },
    yAxis: {
        minPadding: 1,
        maxPadding: 1,
        gridLineWidth: 0,   // 隐藏横向网格线
        lineColor: '#888888',
        lineWidth: 0,
        title: {
            text: ''
        },
        labels: {
            enabled: false      // 禁止标尺
        }
    },
    plotOptions: {
        line: {
            color: '#f07',  // 折线色值
            lineWidth: 1,   // 折线宽度
            enableMouseTracking: true
        }
    },
    series: [{
        name: '播放量',
        data: data,
        tooltip: {
            valueDecimals: 2
        }
    }],
    credits: {
        enabled: false
    }
};
class UserAnalysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {config};
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
                        <ReactHighcharts config={this.state.config}></ReactHighcharts>
                    </div>
                </div>
                <div className="analysis-item">
                    <div className="item-left">
                        <p>305</p>
                        <span>评论数量</span>
                    </div>
                    <div className="item-right">
                        <ReactHighcharts config={this.state.config}></ReactHighcharts>
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