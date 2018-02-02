import React from 'react'

class IncomeTop extends React.Component {
    render() {
        return(
            <div className="IncomeTop clearfix">
                <div className="top-item">
                    <p>昨日视频收入(元)</p>
                    <div>{this.props.income.yesterdayIn}</div>
                </div>
                <div className="top-item">
                    <p>本月累积收入(元)</p>
                    <div>{this.props.income.amountIn}</div>
                </div>
                <div className="top-item">
                    <p>申请提现</p>
                    <button className={this.props.income.amountIn >= 100 ? 'allow-it' : 'no-allow-it'}>提现</button>
                </div>
            </div>
        );
    }
}

export {IncomeTop};