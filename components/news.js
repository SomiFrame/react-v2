import {Component} from 'react'
import Css from '../styles/c-news.scss'
class News extends Component {
    render(){
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: Css }} />
                <div className="news-block">为您推荐了{7}部视频</div>
            </div>
        )
    }
}
export default News