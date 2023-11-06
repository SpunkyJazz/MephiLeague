import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import { IMAGES } from "src/mock";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";

export const MediaPage = (): JSX.Element => (
  <LightGallery plugins={[lgThumbnail]}>
    {IMAGES.map((image, index) => (
      <a href={image} key={index}>
        <img height={220} src={image} />
      </a>
    ))}
    <a href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80">
      <img
        height={220}
        src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
      />
    </a>
    <a href="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80">
      <img
        height={220}
        src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
      />
    </a>
    <a href="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80">
      <img
        height={220}
        src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
      />
    </a>
    <a href="https://sun9-19.userapi.com/impg/39CIOwtzfsXX0bgPLlJ8f96M_245Ajjjnz75zA/ROG5pKm3Ufo.jpg?size=2560x1707&quality=95&sign=ee5a87042ce66ef4b14e2d8c498e2760&type=album">
      <img
        height={220}
        src="https://sun9-19.userapi.com/impg/39CIOwtzfsXX0bgPLlJ8f96M_245Ajjjnz75zA/ROG5pKm3Ufo.jpg?size=2560x1707&quality=95&sign=ee5a87042ce66ef4b14e2d8c498e2760&type=album"
      />
    </a>
    <a href="https://sun9-80.userapi.com/impg/z5MpLtv1s5AE3lBYjBef98q5lHWnI603iKK15Q/5wHmkRQNUww.jpg?size=2560x1707&quality=95&sign=823e407d9e6a9dfd50f856806753375e&type=album">
      <img
        height={220}
        src="https://sun9-80.userapi.com/impg/z5MpLtv1s5AE3lBYjBef98q5lHWnI603iKK15Q/5wHmkRQNUww.jpg?size=2560x1707&quality=95&sign=823e407d9e6a9dfd50f856806753375e&type=album"
      />
    </a>
  </LightGallery>
);
