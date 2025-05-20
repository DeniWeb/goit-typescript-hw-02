import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.gallery_container}>
      {images.map(({ id, alt_description, urls, likes }) => {
        return (
          <li key={id} className={s.gallery_item}>
            <ImageCard
              src={urls}
              alt={alt_description}
              likes={likes}
              openModal={openModal}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
