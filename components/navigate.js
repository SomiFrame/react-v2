import Link from 'next/link'
import React from 'react'
import NavigateCss from '../styles/c-navigate.scss'
class Navigate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        console.log(props);
    }
    render() {
        const numbers = this.props.lists;
        console.log(numbers);
        const lists = numbers.map((number) =>
            <Link href={number.url} key={number.key}>
                <a>{number.name}</a>
            </Link>
        )
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: NavigateCss }} />
                <nav>
                    {lists}
                </nav>
            </div>

        )
    }
}
export default Navigate