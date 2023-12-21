import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <div className="card-grid animate__animated animate__fadeIn">
            <h2>{category}</h2>
            {loading && "Cargando....."}

            {images.map((img) => (
                <GifGridItem key={img.id} {...img} />
            ))}
        </div>
    );
};
