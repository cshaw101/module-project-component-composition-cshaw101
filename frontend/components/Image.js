import React from "react";

const Image = ({ imageData }) => {
return (
    <div>
        <img src={imageData} alt="Image" />
    </div>
)
}



export default Image;