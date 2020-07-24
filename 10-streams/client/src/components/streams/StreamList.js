import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'
import { Link } from 'react-router-dom'

const StreamList = (props) => {

    useEffect(() => {
        props.fetchStreams()
    }, []);

    function renderAdmin(stream) {
        if (props.currentUserId === stream.userId) {
            return (
                <div className='right floated content'>
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
        return <></>
    }

    function renderCreate() {
        if (props.isSignedIn) {
            return (
                <div>
                    <Link to='/streams/new'>
                        <button className='ui button primary right floated'>Create Stream</button>
                    </Link>
                </div>
            )
        }
    }

    function renderList() {
        return props.streams.map(stream => {
            return (
                <div className='item' key={stream.id}>
                    {renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link className="header" to={`/streams/${stream.id}`}>{stream.title}</Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">{renderList()}</div>
            {renderCreate()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, { fetchStreams: fetchStreams })(StreamList);
