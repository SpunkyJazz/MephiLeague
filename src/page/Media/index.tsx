import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";

export const MediaPage = (): JSX.Element => (
  <LightGallery plugins={[lgThumbnail]}>
    {/* {IMAGES.map((image, index) => (
      <a href={image} key={index}>
        <img height={220} src={image} />
      </a>
    ))} */}
  </LightGallery>
);
