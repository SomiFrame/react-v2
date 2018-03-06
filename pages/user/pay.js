import React from 'react'
import {UserLayout} from '../../components/user-components/userLayout'

import payCss from 'styles/u-pay.scss'

const vipType = [
    {vipType:'3个月',vipAmount:'188.00',decription:'免费续赠10天',special:'1.90',active: false},
    {vipType:'6个月',vipAmount:'328.00',decription:'免费续赠25天',special:'1.60',active: false},
    {vipType:'年费',vipAmount:'498.00',decription:'免费续赠60天',special:'1.20',active: true},
    {vipType:'1个月',vipAmount:'70.00',decription:'免费续赠3天',special:'2.10',active: false},
    {vipType:'10天',vipAmount:'30.00',decription:'无免费续赠',special:'3.000',active: false}
];
const payType = [
    {id:'weixin',imgSrc:'/static/images/v2-pay-layer-weixin.png'},
    {id:'qq',imgSrc:'/static/images/v2-pay-layer-qq.png'},
    {id:'bank',imgSrc:'/static/images/v2-pay-layer-bank.png'},
    {id:'alipay',imgSrc:'/static/images/v2-pay-layer-alipay.png'}
];

function getScale(value) {
    if(value < 100)
        return 10.0;
    if(value >= 100 && value < 500)
        return 10.5;
    if(value >= 500 && value < 800)
        return 10.8;
    if(value >= 800)
        return 11.2;
}

function showPoint (value) {
    let originValue = value;
    let scale = getScale(value);
    let extraValue = Math.floor(value * scale);
    let totalValue =  extraValue;
    document.getElementById("point-amout-show").innerText =  totalValue * 10;
}

function removeActive(str) {
    const activeList = document.getElementsByClassName(str);
    for(let i=0, len=activeList.length; i<len; i++) {
        activeList[i].className = str;
    }
}

class UserVipPay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pointValue: '',memberValue: 498,payType: 0};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clickPoint = this.clickPoint.bind(this);
        this.memberClick = this.memberClick.bind(this);
        this.inputPoint = this.inputPoint.bind(this);
        this.typeClick = this.typeClick.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(event.currentTarget);
    }
    clickPoint (event) {
        const value = event.currentTarget.dataset.pointAmount;
        //清除当前选中项
        removeActive('point-item');
        event.currentTarget.className = 'point-item point-item-clicked';
        //去除会员充值中的选中部分
        const memberActive = document.getElementsByClassName('member-div member-div-active');
        if(memberActive.length>0) {
            memberActive[0].className = 'member-div';
        }
        //清除会员充值模块的input值 给积分充值Input赋值
        this.setState({pointValue: value,memberValue: ''});
        showPoint (value);
    }
    memberClick(event) {
        const value = event.currentTarget.dataset.memberAmount;
        //清除当前选中项 清除所在模块的input值
        removeActive('member-div');
        event.currentTarget.className = 'member-div member-div-active';
        //去除会积分充值中的选中部分
        const pointActive = document.getElementsByClassName('point-item point-item-clicked');
        if(pointActive.length>0) {
            pointActive[0].className = 'point-item';
        }
        //清除积分充值模块的input值 给会员充值Input赋值
        this.setState({pointValue: '',memberValue: value});
        showPoint(0);
    }
    inputPoint(e) {
        const value = e.currentTarget.value;
        //清除当前选中项
        removeActive('point-item');
        this.setState({pointValue: value,memberValue: ''});
        showPoint(value);
    }
    typeClick(e) {
        // console.log(e.target.value);
        // console.log(e.target.checked);
        const value = e.target.value;
        this.setState({payType: value});
    }
    render() {
        return(
            <div className="UserVipPay">
                <style dangerouslySetInnerHTML={{ __html: payCss }} />
                <UserLayout>
                    <div className='vip-pay-container'>
                        <form onSubmit={this.handleSubmit} name="payForm">
                            <div className="pay-title">
                                积分充值<span>1元可购买100积分，积分可用来购买或下载视频</span>
                            </div>
                            <div className="pay-point-recharge">
                                <input name="pointAmount" id="pointAmount" placeholder="输入金额" value={this.state.pointValue} onChange={this.inputPoint}/>
                                <span>元</span>
                                <label className="point-item" data-point-amount="10" onClick={this.clickPoint}>10元
                                    <img src="/static/images/u-point-checked.png"/></label>
                                <label className="point-item" data-point-amount="50" onClick={this.clickPoint}>50元
                                    <img src="/static/images/u-point-checked.png"/></label>
                                <label className="point-item" data-point-amount="100" onClick={this.clickPoint}>100元
                                    <img src="/static/images/u-point-checked.png"/></label>
                                <label className="point-item" data-point-amount="150" onClick={this.clickPoint}>150元
                                    <img src="/static/images/u-point-checked.png"/></label>
                                <label className="point-item" data-point-amount="300" onClick={this.clickPoint}>300元
                                    <img src="/static/images/u-point-checked.png"/></label>
                                <div className="point-amout-show"><span  id="point-amout-show">0</span>积分</div>
                            </div>
                            <div className="pay-title">
                                会员充值
                            </div>
                            <div className="pay-member-recharge clearfix">
                                <input type="hidden" name="memberAmout" id="memberAmout" value={this.state.memberValue}/>
                                {
                                    vipType.map((item) => (
                                        <div className={item.active ? 'member-div member-div-active' : 'member-div'} key={item.vipAmount} data-member-amount={item.vipAmount} onClick={this.memberClick}>
                                            <div>{item.vipType}<span>{item.vipAmount}</span></div>
                                            <label>{item.decription}</label>
                                            <span className="member-tips">火爆{item.special}元/天</span>
                                        </div>
                                    ))
                                }

                            </div>
                            <div className="pay-title">
                                付款
                            </div>
                            <div className="vip-pay-div">
                                {
                                    payType.map((arr,index) => (
                                        <div className="pay-div-type" key={arr.id}>
                                            <input type="radio" name="payType" value={index} id={arr.id} defaultChecked={index == 0 ? true : false} onClick={this.typeClick}/>
                                            <label htmlFor={arr.id}><img src={arr.imgSrc}/></label>
                                            <div></div>
                                        </div>
                                    ))
                                }
                                <div className="pay-div-btn">
                                    <button type="submit">立即支付</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </UserLayout>
            </div>
        );
    }
}

export default UserVipPay;