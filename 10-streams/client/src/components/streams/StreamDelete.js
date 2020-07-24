import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import Modal from '../Modal'
import history from '../../history'
import { deleteStream, fetchStream } from '../../actions/index'

const StreamDelete = ({ match, stream, deleteStream }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStream(match.params.id))
    }, []);

    const renderActions = () => {
        const { id } = match.params
        return (
            <>
                <button onClick={() => deleteStream(id)} className="ui button negative">Delete</button>
                <Link to='/' className="ui button">Cancel</Link>
            </>
        )
    }

    function renderContent() {
        if (!stream) {
            return 'Are you sure you want to delete this stream?'
        }
        return `Are you sure you want to delete the stream: ${stream.title}`
    }

    return (
        <>
            <Modal
                title='Delete Stream'
                content={renderContent()}
                actions={renderActions()}
                onDismiss={() => {
                    history.push('/')
                }}
            />
        </>
    )

}
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete);
