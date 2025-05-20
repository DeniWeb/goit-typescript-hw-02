import { getPhotos } from './apiService/photos';
import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import toast, { Toaster } from 'react-hot-toast';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Text from './components/Text/Text';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const [modalAlt, setModalAlt] = useState('');
  const [modalLikes, setModalLikes] = useState(0);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await getPhotos(query, page, perPage);

        if (!results.length) {
          return setIsEmpty(true);
        }

        setImages(prevImages => [...prevImages, ...results]);
        setTotalPage(total_pages);
      } catch (error) {
        setError(error);
        toast.error('You need to write something!');
      } finally {
        setIsLoading(false);
      }
    };

    if (isEmpty) {
      toast.error('No match found!');
    }

    fetchImages();
  }, [page, query, perPage, isEmpty]);

  const onHandleSubmit = value => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    setIsEmpty(false);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (src, alt, likes) => {
    setModalIsOpen(true);
    setModalSrc(src);
    setModalAlt(alt);
    setModalLikes(likes);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalSrc('');
    setModalAlt('');
    setModalLikes(0);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <SearchBar onSubmit={onHandleSubmit} />
      {images.length > 0 ? (
        <ImageGallery images={images} openModal={openModal} />
      ) : (
        !isLoading && <Text>What are you looking for?</Text>
      )}

      {isLoading && <Loader />}
      {page < totalPage && !isLoading && images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} disabled={isLoading}>
          Load more
        </LoadMoreBtn>
      )}
      {images.length > 0 && page >= totalPage && !isLoading && (
        <Text>There are no more images you were looking for.</Text>
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalSrc}
        alt={modalAlt}
        likes={modalLikes}
      />
    </>
  );
}

export default App;
