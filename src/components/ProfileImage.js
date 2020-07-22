import React from 'react';

const ProfileImage = (props) => {
    const imageStyle = {
        backgroundImage: `url(${props.img})`,
    }

    return(
        <div className="ProfileImage" style={imageStyle} onClick={props.setDetails}></div>
    )

}

export default ProfileImage