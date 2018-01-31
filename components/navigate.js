import Link from 'next/link'
import React from 'react'
import NavigateCss from '../styles/c-navigate.scss'
import Router from 'next/router'
class Navigate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    render() {
        const numbers = this.props.lists
        let pathname= ''
        if(this.props.Router.router!==null) {
            pathname=this.props.Router.router.pathname
        }
        const lists = numbers.map((number) =>
            <Link href={number.url} key={number.key} as={number.as}>
                <a className={
                    pathname==number.url?'active':''
                }>{number.name}</a>
            </Link>
        )
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: NavigateCss }} />
                <Link href={{pathname:'/',as:'首页'}}>
                    <img className="logo" src="/static/images/logo.png" />
                </Link>
                <nav>
                    {lists}
                </nav>
            </div>

        )
    }
}
export default Navigate