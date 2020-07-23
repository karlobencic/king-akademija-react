import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../actions'

const UserHeader = ({ user, fetchUser, userId }) => {

    useEffect(() => {
        fetchUser(userId)
    }, []);

    if (!user) {
        return null
    }

    return (
        <div className='header'>{user.name}</div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === ownProps.userId)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader)
