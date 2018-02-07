import React from 'react'

import accountIfonCss from 'styles/c-userAccountInfo.scss'

class AccountInfo extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(e.currentTarget);
    }
    render() {
        return(
            <div className="AccountInfo">
                <style dangerouslySetInnerHTML={{ __html: accountIfonCss }} />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-div">
                        <div className="choose-div">头像尺寸100X100</div>
                        <a className="choose-btn">选择文件</a>
                        <input text="hidden" name="imgSrc" />
                    </div>
                    <div className="form-div">
                        <label>用户名 : </label>
                        <input type="text" name="name" defaultValue="我是这样的TORO"/>
                    </div>
                    <div className="form-div">
                        <label>邮箱 : </label>
                        <input type="text" name="email"/>
                    </div>
                    <div className="form-div">
                        <label>签名/简介 : </label>
                        <textarea name="description"/>
                    </div>
                    <div className="form-div">
                        <button className="save-info" type="submit">保存</button>
                    </div>
                </form>
                <div className="account-sponsored-links">
                    <label>推广链接 : </label><input type="text" name="sponsoredLinks"/><a>复制</a>
                </div>
            </div>
        );
    }
}

export {AccountInfo};