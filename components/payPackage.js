import $ from "jquery"
import React from 'react'
import Link from 'next/link'

import packageCss from 'styles/c-payPackage.scss'

class VipPackage extends React.Component {
    render() {
        return(
            <div className="VipPackage">
                <style dangerouslySetInnerHTML={{ __html: packageCss }} />
                <div>{this.props.vipInfo.vipType}<span>{this.props.vipInfo.vipPrice}</span>元</div>
                <p>{this.props.vipInfo.vipDescript}</p>
                <Link href={this.props.vipInfo.isLogin ? '/pay' : 'login'}><a>立即充值</a></Link>
                <span>{this.props.vipInfo.recommend}</span>
            </div>
        );
    }
}

const VipPrevilige = (props) => (
    <div class="VipPrevilige">
        <div>
            <img src="/static/images/p-download.png"/>
            <div>
                <p>无限下载</p>
                <span>免费下载,保存到本地</span>
            </div>
        </div>
        <div>
            <img src="/static/images/p-quick.png"/>
            <div>
                <p>极速播放</p>
                <span>观看更快,体验更爽</span>
            </div>
        </div>
        <div>
            <img src="/static/images/p-aa.png"/>
            <div>
                <p>屏蔽广告</p>
                <span>无广告,观看无干扰</span>
            </div>
        </div>
        <div>
            <img src="/static/images/p-av.png"/>
            <div>
                <p>AV影院</p>
                <span>AV影院无限观看</span>
            </div>
        </div>
        <div>
            <img src="/static/images/p-multi.png"/>
            <div>
                <p>多屏共享</p>
                <span>移动\PC端会员权益共享</span>
            </div>
        </div>
        <div>
            <img src="/static/images/p-badge.png"/>
            <div>
                <p>尊贵徽章</p>
                <span>尊贵身份,如影随形</span>
            </div>
        </div>
    </div>
)


export {VipPackage, VipPrevilige};