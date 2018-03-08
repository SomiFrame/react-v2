import React from 'react'
import Link from 'next/link'
import {UserLayout} from '../../components/user-components/userLayout'

import securityCss from 'styles/u-security.scss'


class Security extends React.Component {
    render() {
        return(
            <div className="Security">
                <style dangerouslySetInnerHTML={{ __html: securityCss }} />
                <UserLayout>
                    <div className="security-container">
                        <div className="security-title">帐号安全</div>
                        <div className="security-content">
                            <div className="security-div">
                                <label>帐号密码</label>
                                <span>设置一个包含数字和字母,且长度超过6位以上的密码更安全;并建议您定期更换密码。</span>
                                <Link href="/user/accountPassword"><a>修改</a></Link>
                            </div>
                            <div className="security-div">
                                <label>安全邮箱</label>
                                <div className="div-float">已绑定</div>
                                <span>验证邮箱：56xxxxx2@qq.com</span>
                                <Link href="/user/securityEmail"><a>修改</a></Link>
                            </div>
                                <div className="security-div">
                                <label>支付密码</label>
                                <div className="div-float">未设置</div>
                                <Link href="/user/setPayPassword"><a>修改</a></Link>
                            </div>
                        </div>
                    </div>
                </UserLayout>
            </div>
        );
    }
}

export default Security;