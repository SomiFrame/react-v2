import $ from "jquery"
import React from 'react'
import Link from 'next/link'

import beautyItemCss from 'styles/c-beautyItem.scss'

const BeautyItem = (props) => (
    <React.Fragment key={props.beauty.id}>
        <div className="beauty-item" key={props.beauty.id}>
            <div className="beauty-main">
                <img src={props.beauty.beautyImg} />
                {props.beauty.live_status == 0 && <div className="beauty-state" style={{background: '#666'}}> 未直播 </div>}
                {props.beauty.live_status == 1 && props.beauty.one_to_many_status == 1 &&
                <div className="beauty-vip">正在直播</div>}
                {props.beauty.live_status == 1 && props.beauty.one_to_many_status != 1 &&
                <div className="beauty-state">正在直播</div>}
            </div>
            <div className="beauty-title">
                <Link href={props.beauty.liveHref}><a>{props.beauty.name}</a></Link>
                <span><img src="/static/images/beauty-fans.png"/>{props.beauty.fans}</span>
            </div>
        </div>
    </React.Fragment>
)

const BeautyList = (props) => (
    <div className="BeautyList">
        <style dangerouslySetInnerHTML={{ __html: beautyItemCss }} />
        {props.beautyLists.map((beauty) => (
            <BeautyItem beauty={beauty}/>
        ))}

        {/* 提出 单个直播页面的组建
         <div className="beauty-item" key={beauty.id}>
         <div className="beauty-main">
         <img src={beauty.beautyImg} />
         {beauty.live_status == 0 && <div className="beauty-state" style={{background: '#666'}}> 未直播 </div>}
         {beauty.live_status == 1 && beauty.one_to_many_status == 1 &&
         <div className="beauty-vip">正在直播</div>}
         {beauty.live_status == 1 && beauty.one_to_many_status != 1 &&
         <div className="beauty-state">正在直播</div>}

         </div>
         <div className="beauty-title">
         <Link href={beauty.liveHref}><a>{beauty.name}</a></Link>
         <span><img src="/static/images/beauty-fans.png"/>{beauty.fans}</span>
         </div>
         </div>*/}
    </div>
)

export {BeautyList};