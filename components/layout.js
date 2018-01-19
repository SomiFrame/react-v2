import Link from 'next/link'
import Head from 'next/head'
import Navigate from './navigate'
import Header from './header'
import LayoutCss from 'styles/c-layout.scss'
import SearchBox from './searchBox'

const lists = [
  {
    name: '猜你喜欢',
    url: '/',
    key: 1
  },
  {
    name: '网友自拍',
    url: '/selfie',
    key: 2
  },
  {
    name: '女优视频',
    url: '/actress',
    key: 3
  },
  {
    name: '女神直播',
    url: '/goddess',
    key: 4
  }
]
export default (props) => (
  <div>
    <Head>
      <title>{props.title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{ __html: LayoutCss }} global="true" />
    </Head>
    <Header />
    <div className="container">
      <div className="container-left">
        <Navigate lists={lists} />
      </div>
      <div className="container-middle">
        {props.children}
      </div>
      <div className="container-right">
        <SearchBox />
        {props.right_content}
      </div>
    </div>
    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
)