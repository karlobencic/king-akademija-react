import _ from 'lodash'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { editStream, fetchStream } from '../../actions/index'
import StreamForm from './StreamForm'

const StreamEdit = (props) => {

    useEffect(() => {
        props.fetchStream(props.match.params.id)
    }, []);

    const onSubmit = (formValues) => {
        props.editStream(props.match.params.id, formValues)
    }

    if (!props.stream) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm initialValues={_.pick(props.stream, 'title', 'description', 'videoId')} onSubmit={onSubmit} />
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params
    return { stream: state.streams[id] }
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
