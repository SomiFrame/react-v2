import { Component, Fragment } from 'react'
import videojs from 'video.js'
import dash from 'dashjs'
import vjsContribDash from 'videojs-contrib-dash'
import DefaultCss from '../node_modules/video.js/src/css/vjs.scss'
import Css from '../styles/c-player.scss'
import vastCss from '../lib/videojs-vast-vpaid/styles/videojs.vast.vpaid.scss'
import dynamic from 'next/dynamic'

export default class VideoPlayer extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(prevProps, prevState, prevContext) {
        window.videojs = videojs
        import('../lib/videojs-vast-vpaid/bin/videojs_5.vast.vpaid').then(() => {
            this.player = videojs(this.videoNode, this.props, () => {
                console.log('onPlayerReady')
                this.player.play()
            })
        }).catch((error) => {
            console.log(error)
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
                <style dangerouslySetInnerHTML={{ __html: vastCss }} />
                <div className="v2-player" data-vjs-player>
                    <video ref={node => this.videoNode = node} className="video-js"></video>
                </div>
            </Fragment>
        )
    }
}