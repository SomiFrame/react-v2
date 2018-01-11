import { Component } from 'react'
import Css from '../styles/c-searchBox.scss'
class SearchBox extends Component {
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: Css }} />
                <form className="search-form">
                    <input type="text" name="name" placeholder="请输入关键字　搜索你感兴趣的视频" />
                </form>
            </div>
        )
    }
}
export default SearchBox