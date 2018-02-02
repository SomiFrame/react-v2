import React from 'react'
import Link from 'next/link'
import {UserLayout} from '../../components/user-components/userLayout'
import {IncomeTop} from '../../components/user-components/userIncome'

import incomeCss from 'styles/u-income.scss'

const income = {
    yesterdayIn: '0.00',
    amountIn: '99.00'
};
const incomeList = [
    {id:'1',type:'0',day:'7',date: '2015-12-18  12:30',income: '203.5 收入记录 7天'},
    {id:'2',type:'0',day:'7',date: '2015-12-19  12:30',income: '204.5 收入记录 7天'},
    {id:'3',type:'0',day:'7',date: '2015-12-20  12:30',income: '205.5 收入记录 7天'},
    {id:'4',type:'1',day:'7',date: '2015-12-21  12:30',income: '206.5 提现记录 7天'},
    {id:'5',type:'1',day:'7',date: '2015-12-22  12:30',income: '207.5 提现记录 7天'},
    {id:'6',type:'1',day:'7',date: '2015-12-23  12:30',income: '208.5 提现记录 7天'},
    {id:'7',type:'1',day:'7',date: '2015-12-24  12:30',income: '209.5 提现记录 7天'},
    {id:'8',type:'1',day:'15',date: '2015-12-25  12:30',income: '210 提现记录 15天'},
    {id:'9',type:'1',day:'15',date: '2015-12-26  12:30',income: '211 提现记录 15天'},
    {id:'10',type:'1',day:'15',date: '2015-12-27  12:30',income: '212 提现记录 15天'},
    {id:'11',type:'0',day:'15',date: '2015-12-28  12:30',income: '213.5 收入记录 15天'},
    {id:'12',type:'0',day:'15',date: '2015-12-29  12:30',income: '214.5 收入记录 15天'},
    {id:'13',type:'0',day:'15',date: '2015-12-30  12:30',income: '215.5 收入记录 15天'},
    {id:'14',type:'0',day:'15',date: '2015-12-31  12:30',income: '216.5 收入记录 15天'},
    {id:'15',type:'1',day:'30',date: '2016-01-01  12:30',income: '217.5 提现记录 30天'},
    {id:'16',type:'1',day:'30',date: '2016-01-02  12:30',income: '218.5 提现记录 30天'},
    {id:'17',type:'1',day:'30',date: '2016-01-03  12:30',income: '219.5 提现记录 30天'},
    {id:'18',type:'1',day:'30',date: '2016-01-04  12:30',income: '220 提现记录 30天'},
    {id:'19',type:'0',day:'30',date: '2016-01-05  12:30',income: '220.5 收入记录 30天'},
    {id:'20',type:'0',day:'30',date: '2016-01-06  12:30',income: '221.5 收入记录 30天'},
    {id:'21',type:'0',day:'30',date: '2016-01-07  12:30',income: '222.5 收入记录 30天'},
    {id:'22',type:'0',day:'30',date: '2016-01-08  12:30',income: '223.5 收入记录 30天'},
    {id:'23',type:'0',day:'30',date: '2016-01-09  12:30',income: '224.5 收入记录 30天'}
];
function filterData(type,dayType) {
    return incomeList.filter((item) => {
        return item.type == type && item.day == dayType;
    })
}
class MyIncome extends React.Component {
    dayType = '7'
    type = '0'
    constructor(props) {
        super(props);
        const incomeList = filterData(this.type,this.dayType);
        this.state = {
            data: incomeList
        };
        this.titleClick = this.titleClick.bind(this);
        this.typeClick = this.typeClick.bind(this);
    }
    titleClick(dayType, e) {
        const eleList = document.getElementsByClassName('title');
        for(let i =0,len = eleList.length; i < len; i++) {
            eleList[i].className = 'title';
        }
        e.currentTarget.className = 'title title-hover';
        this.dayType = dayType;
        this.setState({
            data: filterData(this.type,this.dayType)
        });
    }
    typeClick(event) {
        this.type = event.target.value;
        this.setState({
            data: filterData(this.type,this.dayType)
        });
    }
    render() {
        return(
            <div className="MyIncome">
                <style dangerouslySetInnerHTML={{ __html: incomeCss }} />
                <UserLayout>
                    <div className="income-container">
                        <IncomeTop income={income}/>
                        <div className="income-bottom">
                            <div className="income-title">
                                <span className="title title-hover" onClick={this.titleClick.bind(this, '7')}>最近7天</span>
                                <span className="title" onClick={this.titleClick.bind(this, '15')}>最近14天</span>
                                <span className="title" onClick={this.titleClick.bind(this, '30')}>最近30天</span>
                                <select className="income-type" onChange={this.typeClick}>
                                    <option value="0">收入统计</option>
                                    <option value="1">提现记录</option>
                                </select>
                            </div>
                            <div className="income-lists">
                                <div className="list-caption listItem">
                                    <div>日期</div>
                                    <div>收入</div>
                                </div>
                                {
                                    this.state.data.map((list) => (
                                        <div className="list-item listItem" key={list.id}>
                                            <div>{list.date}</div>
                                            <div>{list.income}</div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </UserLayout>
            </div>
        );
    }
}

export default MyIncome;