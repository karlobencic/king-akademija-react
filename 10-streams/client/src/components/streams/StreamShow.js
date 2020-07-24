import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'
import YouTube from 'react-youtube';

class StreamShow extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchStream(id)
    }

    onReady(event) {
        event.target.pauseVideo();
    }

    render() {
        const { stream } = this.props;

        if (!stream) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <YouTube videoId={stream.videoId} onReady={this.onReady} />
                <h1>{stream.title}</h1>
                <h5>{stream.description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream })(StreamShow);
