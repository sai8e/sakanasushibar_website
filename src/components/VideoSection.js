import React from "react";
import "./VideoSection.css";

function VideoSection() {
  return (
    <div className="video">
      {/* <h1>Check out these EPIC Destinations!</h1> */}
      <div className="video__container">
        <div className="video__wrapper">
          <iframe
            class="video__item"
            src="https://www.youtube.com/embed/z96AggDAv3w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="1"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
