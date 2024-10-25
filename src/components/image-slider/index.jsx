import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, page, limit }) {
  const [images, setImages] = useState([]);
  const [currImage, setCurrImage] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(url) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrImage(currImage === 0 ? images.length - 1 : currImage - 1);
  }

  function handleNext() {
    setCurrImage(currImage === images.length - 1 ? 0 : currImage + 1);
  }

  useEffect(() => {
    if (url) fetchImages(url);
  }, [url, page, limit]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error Occurred! {error}</div>;
  }

//   console.log(images);

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={
                index === currImage
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  index === currImage
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrImage(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
