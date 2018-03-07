import { Component, Fragment } from 'react'
import videojs from 'video.js'
import dash from 'dashjs'
import vjsContribDash from 'videojs-contrib-dash'
import DefaultCss from '../node_modules/video.js/src/css/vjs.scss'
import Css from '../styles/c-player.scss'
export default class VideoPlayer extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(prevProps, prevState, prevContext) {
        this.player = videojs(this.videoNode, this.props, () => {
            console.log('onPlayerReady', this)
        })
    }
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }
    render() {
        return (
            <Fragment>
                <style dangerouslySetInnerHTML={{ __html: DefaultCss }} />
                <style dangerouslySetInnerHTML={{ __html: Css }} />
                <div className="v2-player" data-vjs-player>
                    <video ref={ node => this.videoNode = node} className="video-js"></video>
                </div>
            </Fragment>
        )
    }
}