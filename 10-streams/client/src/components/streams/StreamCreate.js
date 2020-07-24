import React from 'react'
import { useDispatch } from 'react-redux'
import { createStream } from '../../actions/index'
import StreamForm from './StreamForm'

const StreamCreate = () => {

    const dispatch = useDispatch();

    const onSubmit = (formValues) => {
        dispatch(createStream(formValues))
    }

    return (
        <>
            <h3>Create a Stream</h3>
            <StreamForm onSubmit={onSubmit} initialValues={{}} />
        </>
    )
}


export default StreamCreate
