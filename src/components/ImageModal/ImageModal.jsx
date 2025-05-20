import Modal from 'react-modal';
import { FaHeart } from 'react-icons/fa';
import s from './ImageModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '55rem',
    maxHeight: '55rem',
    background: '#f6e8ead0',
  },
  overlay: {
    background: 'rgba(0,0,0,0.8)',
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ modalIsOpen, closeModal, src, alt, likes }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={src} alt={alt} />
      <p className={s.modal_p}>
        <FaHeart />
        {likes}
      </p>
    </Modal>
  );
};

export default ImageModal;
