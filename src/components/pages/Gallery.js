import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Footer from "../Footer";
import images from "./Gallery_data";
import {SRLWrapper} from "simple-react-lightbox";
import SimpleReactLightBox from "simple-react-lightbox";


const options = {
  // settings: {
  // 	overlayColor: 'rgb(25, 136, 124)',
  // 	autoplaySpeed: 1500,
  // 	transitionSpeed: 900
  // },
  buttons: {
    // backgroundColor: 'red',
    // iconColor: 'rgba(126, 172, 139, 0.8)',
    showDownloadButton: false,
  },
};

export default function Gallery() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);
  return (
    <>
      <h1 className="gallery">Gallery</h1>
      <React.StrictMode>
        <SimpleReactLightBox>
          <div className="App">
            <div className="tags">
              <TagButton
                name="all"
                tagActive={tag === "all" ? true : false}
                handleSetTag={setTag}
              />{" "}
              /
              <TagButton
                name="sushi"
                tagActive={tag === "sushi" ? true : false}
                handleSetTag={setTag}
              />{" "}
              /
              <TagButton
                name="kitchen food"
                tagActive={tag === "kitchen food" ? true : false}
                handleSetTag={setTag}
              />{" "}
              /
              <TagButton
                name="other"
                tagActive={tag === "other" ? true : false}
                handleSetTag={setTag}
              />
            </div>
            <SRLWrapper options={options}>
              <div className="container">
                {filteredImages.map((image) => (
                  <div key={image.id} className="image-card">
                    <a href={`/imagesGallery/${image.imageName}`}>
                      <img
                        className="image"
                        src={`/imagesGallery/${image.imageName}`}
                        alt=""
                      />
                    </a>
                  </div>
                ))}
              </div>
            </SRLWrapper>
          </div>
        </SimpleReactLightBox>
      </React.StrictMode>
      <Footer />
    </>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};
