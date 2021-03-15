import React from 'react';

const Photolist = ({ list }) => {
    return (
        <div className="profile-bio">
            <img src={list.urls.small} alt="" />
        </div>
    )
}
export default Photolist;