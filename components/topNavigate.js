import React from 'react'
import Router from 'next/router'
const pathname = Router.pathname
class TopNavigate extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>{pathname}</div>
        )
    }
}
export default TopNavigate 