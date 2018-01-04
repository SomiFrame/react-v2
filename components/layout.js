import Link from 'next/link'
import Head from 'next/head'
import Navigate from './navigate'
import Header from './header'
import LayoutCss from 'styles/c-layout.scss'

const lists = [
  {
    name: '猜你喜欢',
    url: '/',
    key: 1
  },
  {
    name: '网友自拍',
    url: '/about',
    key: 2
  }
]
export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{ __html: LayoutCss }} global="true" />
    </Head>
    <Header />
    <div className="container">
      <div className="container-left">
        <Navigate lists={lists}/>
      </div>
      <div className="container-middle">
        {children}
      </div>
      <div className="container-right">
      </div>
    </div>

    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
)