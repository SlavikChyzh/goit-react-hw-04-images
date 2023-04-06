import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { getImages } from '../../axiosImages';
import { ButtonLoadMore } from 'components/Button/Button';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Modal } from '../Modal/Modal';
import { Dna } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const ImageGallery = ({ searchWorld }) => {
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isModal, setIsModal] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    setGallery([]);
    setSearch(searchWorld);
  }, [searchWorld]);

  useEffect(() => {
    if (search !== '') {
      setIsLoading(true);
      setIsLoadMore(false);
      getImages(search, page)
        .then(response => {
          if (response.length !== 0) {
            setIsLoading(false);
            setIsLoadMore(true);
            setGallery([...gallery, ...response]);
          } else if (response.length === 0) {
            Report.failure('No more images to load', 'Okay');
            setIsLoadMore(false);
          }
        })
        .catch(error => {
          console.log('error :>> ', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [page, search]);

  const handleModal = largeImageURL => {
    setIsModal(largeImageURL);
  };

  const closeModal = () => {
    setIsModal('');
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <ul className="ImageGallery">
        {gallery.map(({ webformatURL, tags, id, largeImageURL }) => {
          return (
            <ImageGalleryItem
              id={id}
              link={webformatURL}
              title={tags}
              key={id}
              largeImage={largeImageURL}
              handleModal={handleModal}
            />
          );
        })}
      </ul>
      {isLoading && (
        <div className="spinner">
          <Dna
            visible={true}
            height="100"
            width="100"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}
      {isLoadMore && <ButtonLoadMore loadMore={loadMore} />}
      {isModal && <Modal largeImage={isModal} closeModal={closeModal} />}
    </>
  );
};

export { ImageGallery };

ImageGallery.propTypes = {
  searchWorld: PropTypes.string.isRequired,
};

// const queryImages = () => {
//   setIsLoading(true);
//   setIsLoadMore(false);
//   getImages(searchWorld, page)
//     .then(response => {
//       if (response.length !== 0) {
//         setIsLoading(false);
//         setIsLoadMore(true);
//         setGallery([...gallery, ...response]);
//       } else if (response.length === 0) {
//         Report.failure('No more images to load', 'Okay');
//         setIsLoadMore(false);
//       }
//     })
//     .catch(error => {
//       console.log('error :>> ', error);
//     })
//     .finally(() => {
//       setIsLoading(false);
//     });
// };
