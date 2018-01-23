import Slider from 'react-slick'
import { Component, Fragment } from 'react'
import CssSlick from '../node_modules/slick-carousel/slick/slick.css'
import CssTheme from '../node_modules/slick-carousel/slick/slick-theme.css'
import Link from 'next/link'
import Css from '../styles/c-carousel.scss'

const constainer_style = {
    height: 300,
}
class Carousel extends Component {
    constructor(porps) {
        super(porps)
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <Fragment>
                <style dangerouslySetInnerHTML={{ __html: CssSlick }} />
                <style dangerouslySetInnerHTML={{ __html: CssTheme }} />
                <div className="carousel-container" style={constainer_style}>
                    <style dangerouslySetInnerHTML={{ __html: Css }} />
                    <Slider {...settings} >
                        {
                            this.props.lists.map((item, index) =>
                                <div className="carousel-item" key={index}>
                                    <img className="carousel-img" src={item.img_url} />
                                    <Link href={item.link}>
                                        <a className="carousel-link">
                                        {item.title}
                                        </a>
                                    </Link>
                                </div>

                            )
                        }
                    </Slider>
                </div>
            </Fragment>
        )
    }
}
export default Carousel