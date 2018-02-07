import { Component } from 'react'
import videojs from 'video.js'
export default class VideoPlayer extends Component {
    componentDidMount() {
        this.player = videojs(this.videoNode, this.props, () => {
            console.log('onPlayerReady', this)
        })
    }
    componentWillMount() {
        if (this.player) {
            this.player.dispose()
        }
    }
    render() {
        return (
            <div data-vjs-player>
                <video ref={node => this.videoNode = node} className="video=js"></video>
            </div>
        )
    }
}