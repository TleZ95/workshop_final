import React from 'react'
import UserProfile from '../components/Userprofile';
const User = (props) => {
    return (
        <>
            <UserProfile id={props.match.params.id} />
        </>
    )
}
export default User