import React from 'react'
import {UserLayout} from '../../components/user-components/userLayout'
import {AccountInfo} from '../../components/user-components/userAccountInfo'

import accountCss from 'styles/u-account.scss'

const points = [
    {id: '0',description: 'sfafef',date:'2019-12-31 06：30',point:'0'},
    {id: '1',description: 'DB12dfsdgdsb3698547',date:'2011-12-31 06：30',point:'1'},
    {id: '2',description: 'DB12369sdwq4tb 8547',date:'2011-12-31 06：30',point:'1'},
    {id: '3',description: 'AF12369855985956547',date:'2010-12-31 06：30',point:'0'}
];
const orders = [
    {id: '11',date: '2019-12-31 06：30',orederdes:'订单详情',amount: '203.5',type:'0',status:'0'},
    {id: '12',date: '2013-12-31 06：30',orederdes:'订单详情',amount: '159',type:'1',status:'1'},
    {id: '13',date: '2014-12-31 06：30',orederdes:'订单详情',amount: '67',type:'2',status:'2'},
    {id: '14',date: '2017-12-31 06：30',orederdes:'订单详情',amount: '999',type:'3',status:'0'}
];
const exchanges = [
    {id: '0',type: '0',typeName:'3天体验',recordId: 'DB123698547',expireDate:'2019-12-31 06：30',status:'0'},
    {id: '1',type: '1',typeName:'7天试用',recordId: 'DB123698542',expireDate:'2019-12-31 06：30',status:'1'},
    {id: '2',type: '2',typeName:'30天',recordId: 'DB123698541',expireDate:'2019-12-31 06：30',status:'1'},
    {id: '3',type: '0',typeName:'60天',recordId: 'AF123698544',expireDate:'2018-12-31 06：30',status:'0'}
];

const RecordSection = (props) => (
    <div className="record-div">
        {props.titleType == '1' &&
            <React.Fragment>
                <div className="record-list record-caption">
                    <div>序号</div><div>类型</div><div>兑换码</div><div>到期时间</div><div>订单状态</div>
                </div>
                {props.records.map((item) => (
                    <div className="record-list record-item" key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.typeName}</div>
                        <div>{item.recordId}</div>
                        <div>{item.expireDate}</div>
                        <div>{item.status}</div>
                    </div>
                ))}
            </React.Fragment>
        }
        {props.titleType == '2' &&
            <React.Fragment>
                <div className="record-list record-caption">
                    <div>时间</div><div>订单详情</div><div>支付金额</div><div>支付方式</div><div>交易状态</div>
                </div>
                {props.records.map((item) => (
                    <div className="record-list record-item" key={item.id}>
                        <div>{item.date}</div>
                        <div>{item.orederdes}</div>
                        <div>{item.amount}</div>
                        <div>{item.type}</div>
                        <div>{item.status}</div>
                    </div>
                ))}
            </React.Fragment>
        }
        {props.titleType == '3' &&
            <React.Fragment>
                <div className="record-list record-caption record-width">
                    <div>时间</div><div>详情</div><div>积分</div>
                </div>
                {props.records.map((item) => (
                    <div className="record-list record-item record-width" key={item.id}>
                        <div>{item.date}</div>
                        <div>{item.description}</div>
                        <div>{item.point}</div>
                    </div>
                ))}
            </React.Fragment>
        }
    </div>
)

class AccountSetting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 0,
            data: exchanges
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(type,e) {
        const eleList = document.getElementsByClassName('title');
        for(let i =0,len = eleList.length; i < len; i++) {
            eleList[i].className = 'title';
        }
        e.currentTarget.className = 'title title-hover';
        if(type == '1') {
            this.setState({
                type: type,
                data: exchanges
            });
        } else if(type == '2') {
            this.setState({
                type: type,
                data: orders
            });
        } else if(type == '3') {
            this.setState({
                type: type,
                data: points
            });
        }else {
            console.log('帐号资料');
            this.setState({
                type: type
            });
        }
    }
    render() {
        return(
            <div className="AccountInfo">
                <style dangerouslySetInnerHTML={{ __html: accountCss }} />
                <UserLayout>
                    <div className="account-container">
                        <div className="account-title">
                            <span className="title title-hover" onClick={this.handleClick.bind(this, '0')}>帐号资料</span>
                            <span className="title" onClick={this.handleClick.bind(this, '1')}>兑换码</span>
                            <span className="title" onClick={this.handleClick.bind(this, '2')}>我的订单</span>
                            <span className="title" onClick={this.handleClick.bind(this, '3')}>积分记录</span>
                        </div>
                        <div className="account-content clearfix">
                            {
                                this.state.type == 0 &&
                                <div className="account-info">
                                    <AccountInfo />
                                </div>
                            }
                            {
                                this.state.type != 0 &&
                                <RecordSection records={this.state.data} titleType={this.state.type}/>
                            }
                        </div>
                    </div>
                </UserLayout>
            </div>
        );
    }
}

export default AccountSetting;
