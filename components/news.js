import { Component, Fragment } from 'react'
import Css from '../styles/c-news.scss'

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            WebSocket: null,
            news: false,
            data: null
        }
    }
    componentDidMount() {
        this.creatSocket()
    }
    creatSocket() {
        if ("WebSocket" in window) {
            const ws = new window.WebSocket('wss://echo.websocket.org')
            ws.onopen = (data) => {
                ws.send('message to server')
                this.setState({ WebSocket: ws })
            }
            ws.onmessage = (data) => {
                console.log(data, 'from servere massage')
                this.setState({news: true})
            }
            ws.onerror = (data) => {
                console.log(data, 'from servere massage')
            }
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.news &&
                    <Fragment>
                        <style dangerouslySetInnerHTML={{ __html: Css }} />
                        <div className="news-block">为您推荐了{7}部视频</div>
                    </Fragment>
                }
            </div>
        )
    }
}
export default News