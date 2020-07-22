import React from 'react';

const ProfileImage = (props) => {
    const imageStyle = {
        backgroundImage: `url(${props.img})`,
    }

    return(
        <div className="ProfileImage" style={imageStyle}></div>
    )

}

export default ProfileImage