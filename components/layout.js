import Link from 'next/link'
import Head from 'next/head'
import Navigate from './navigate'
import Header from './header'
import LayoutCss from 'styles/c-layout.scss'
import SearchBox from './searchBox'
import { Component } from 'react'

const lists = [
  {
    name: '猜你喜欢',
    url: '/sccc',
    as: '/guess',
    key: 1
  },
  {
    name: '网友自拍',
    url: '/selfie',
    as: '/selfie',
    key: 2
  },
  {
    name: '女优视频',
    url: '/actress',
    as: '/actress',
    key: 3
  },
  {
    name: '女神直播',
    url: '/goddess',
    as: '/goddess',
    key: 4
  },
  {
    name: '会员特权',
    url: '/pay',
    as: '/pay',
    key: 5
  }
]
class Layout extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <style dangerouslySetInnerHTML={{ __html: LayoutCss }} global="true" />
        </Head>
        <Header />
        <div className="container">
          <div className="container-left">
            <Navigate lists={lists} Router={this.props.Router}/>
          </div>
          <div className="container-middle">
            {this.props.children}
          </div>
          <div className="container-right">
            <SearchBox />
            {this.props.right_content}
          </div>
        </div>
        <footer>
        </footer>
      </div>
    )
  }
} 
export default Layout