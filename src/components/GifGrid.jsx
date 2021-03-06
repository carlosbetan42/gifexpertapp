import React from "react";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>
      {loading && <p className='animate__animated animate__flash'>Loading</p>}
      <div className='card-grid'>
        <ol>
          {images.map((img) => (
            <GifGridItem key={img.id} {...img}></GifGridItem>
          ))}
        </ol>
      </div>
    </>
  );
};

export default GifGrid;
