import { Component } from 'react'
import Link from 'next/link'
import Css from '../styles/c-listItem.scss'
class ListItem extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    componentWillMount() {

    }
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: Css }} />
                <ul className="list-container">
                    {
                        this.props.listItems.map((item,index) => 
                            <li key={index}>
                                <div className="list-item clearfix">
                                    <div className="item-left">
                                        <Link href="">
                                            <a>
                                                <img src={item.img_url} />
                                                <div className="time-container">
                                                    <label>{item.duration}</label>
                                                    <div className="label-background"></div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="item-right">
                                        <Link href="">
                                            <a className="item-title">
                                                {item.title}
                                            </a>
                                        </Link>
                                        <div className="item-option">
                                            <Link href="">
                                                <a className="item-type">
                                                    {item.type}
                                                </a>
                                            </Link>
                                            <Link href="">
                                                <a className="item-user">
                                                    {item.author}
                                                </a>
                                            </Link>
                                            <div className="period">.</div>
                                            {item.play_count}次播放
                                    <div className="period">.</div>
                                            {item.released}
                                </div>
                                        <div className="ad-block">
                                            <Link href="">
                                                <a className="ad-link">
                                                    {
                                                        '推荐：宝马娱乐乐开户就送８８８８元，宝马娱乐开户'
                                                    }
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        )
                    }
                </ul>
            </div>
        )
    }
}
export default ListItem