import React from 'react';
import ResumeButton from './components/resume';

import './app.css';

class App extends React.Component {

    constructor(props) {

        super(props);

        this.videoElRef = React.createRef();

        this.isFullscreen = false;

        this.state = {
            showResume: false,
        };

    }

    /**
     *
     * Set up begin/end fullscreen listeners
     *
     */
    componentDidMount() {

        this.videoElRef.current.removeEventListener('webkitendfullscreen', this.onEndFullscreen);
        this.videoElRef.current.removeEventListener('webkitbeginfullscreen', this.onBeginFullscreen);

        this.videoElRef.current.addEventListener('webkitendfullscreen', this.onEndFullscreen);
        this.videoElRef.current.addEventListener('webkitbeginfullscreen', this.onBeginFullscreen);

    }

    /**
     *
     * Handler for the end fullscreen event from iOS
     *
     */
    onEndFullscreen = () => {

        console.log('Exited fullscreen');
        this.setState({
            showResume: true,
        });

    }

    /**
     *
     * Handler for the being fullscreen event from iOS
     *
     */
    onBeginFullscreen = () => {

        console.log('Began fullscreen');

    }

    /**
     *
     * Handle the resume UX interaction
     *
     */
    onClickResume = () => {

        console.log('On click resume');

        this.isFullscreen = false;
        this.videoElRef.current.play();
        this.setState({
            showResume: false,
        });

    }

    /**
     *
     * Send the video tag into fullscreen mode on iOS
     *
     */
    onClickFullscreen = () => {

        this.videoElRef.current.webkitEnterFullscreen();

    }

    /**
     *
     * Hide the resume UX when the media starts playback
     *
     */
    onPlay = () => {

        this.setState({
            showResume: false,
        });

    }

    /**
     * The pause event can also be used to present the resume UX
     */
    /* onPause = () => {

        this.setState({
            showResume: true,
        });

    } */

    render() {

        return (
            <div className="video-container">
                <div>
                    <video src="/video/ForBiggerBlazes.mp4"
                        onPlay={this.onPlay}
                        onPause={this.onPause}
                        ref={this.videoElRef}
                        controls
                        playsInline
                        muted
                        loop></video>
                </div>
                <div>
                    <button id="fullscreenBtn" onClick={this.onClickFullscreen}>Enter Fullscreen</button>
                    {this.state.showResume
                        ? <ResumeButton onClickResume={this.onClickResume}/>
                        : null}
                </div>
            </div>
        );

    }

}

export default App;
