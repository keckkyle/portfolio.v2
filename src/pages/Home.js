import React from 'react';

const Home = (props) => {
    const background={
        backgroundImage: "url(https://s3.amazonaws.com/keckkyle.com.images/walk.jpeg)"
    }
    const padding = {
        padding: "0"
    }

    return(
        <div style={padding} className="Page">
            <div style={background} className="Background-Image">
                <div className="opaque-background">

                </div>
            </div>
        </div>
    )
}

export default Home;