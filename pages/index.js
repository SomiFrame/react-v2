import Layout from '../components/layout'
import React from 'react'
import ListItem from '../components/listItem'
import 'isomorphic-unfetch'

import stylesheet from 'styles/index.scss'
class Index extends React.Component {
    static async getInitialProps({ req }) {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        const res = await fetch('https://api.github.com/repos/zeit/next.js')
        const json = await res.json()
        return {
            stars: json.stargazers_count,
            userAgent
        }
    }
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Layout>
                    <ListItem />
                    {/* <div>hellp {this.props.userAgent}</div> */}
                    {/* <div>{this.props.stars}</div> */}
                </Layout>
            </div>
        )
    }
}
export default Index;