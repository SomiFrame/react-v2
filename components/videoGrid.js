import React from 'react'
import Link from 'next/link'
import Css from '../styles/c-videoGrid.scss'
class VGrid extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: Css }} />
                <ul className="video-grid">
                    {
                        this.props.videoGrids.map((item, index) =>
                            <li key={index} className="grid-item">
                                <Link href={item.href}>
                                    <a>
                                        <img src={item.img_url} />
                                        {
                                            item.status? 
                                            <div className="grid-status on">
                                                {'正在直播'}
                                            </div>:
                                            <div className="grid-status off">
                                                {'正在直播'}
                                            </div>
                                        }
                                        <div className="grid-text-container">
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
export default VGrid 