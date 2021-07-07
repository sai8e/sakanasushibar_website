import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Menu_item(props) {
  return (
    <>
      {props.filteredImages.map((image) => (
        <div key={image.id} className="menu_image-card">
          {/* {image.id === "title" ? <h1> Testing </h1> : ""} */}
          {/* <a href={`/imagesGallery/${image.imageName}`}>
                <p>Test</p>
                <img
                  className="image"
                  src={`/imagesGallery/${image.imageName}`}
                  alt=""
                />
              </a> */}

          <Popup
            trigger={
              <button className="menu_button">
                <div className="ixMaBu">
                  {/* <div className="esGvJU">
                    <div className="klbrrx">
                      <img
                        className="image iUxyLI"
                        src={`/imagesGallery/${image.imageName}`}
                        alt=""
                      />
                    </div>
                  </div> */}

                  <div className="LjBBC">
                    <div className="iUYAiH">
                      <span className="izBrpx">{image.name}</span>
                      <span className="iSLJhq">{image.price}</span>
                    </div>
                    {/* <div className="djHviU"> */}

                    {/* </div> */}
                    <span className="kmvjNe">{image.description}</span>
                  </div>
                </div>
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header">
                  {" "}
                  {image.name} {image.price}{" "}
                </div>
                <div className="content"> {image.description}</div>
                {/* <img
                  className="image"
                  src={`/imagesGallery/${image.imageName}`}
                  alt=""
                /> */}
                {/* <div className="actions">
                      <Popup
                        trigger={<button className="button"> Trigger </button>}
                        position="top center"
                        nested
                      >
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Beatae magni omnis delectus nemo, maxime
                          molestiae dolorem numquam mollitia, voluptate ea,
                          accusamus excepturi deleniti ratione sapiente!
                          Laudantium, aperiam doloribus. Odit, aut.
                        </span>
                      </Popup>
                      <button
                        className="button"
                        onClick={() => {
                          console.log("modal closed ");
                          close();
                        }}
                      >
                        close modal
                      </button>
                    </div> */}
              </div>
            )}
          </Popup>
        </div>
      ))}
    </>
  );
}

export default Menu_item;
