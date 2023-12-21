import React from "react";

export const GifGridItem = ({ title, id, url }) => {
    return (
        <div className="card animate__animated animate__bounceInDown">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};
