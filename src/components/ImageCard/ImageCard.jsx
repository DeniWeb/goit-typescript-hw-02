import s from './ImageCard.module.css';

const ImageCard = ({ src, alt, likes, openModal }) => {
  return (
    <div>
      <img
        src={src.small}
        alt={alt}
        onClick={() => openModal(src.full, alt, likes)}
        className={s.gallery_img}
      />
    </div>
  );
};

export default ImageCard;
