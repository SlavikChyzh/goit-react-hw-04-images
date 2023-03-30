import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { getImages } from '../../axiosImages';
import { ButtonLoadMore } from 'components/Button/Button';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Modal } from '../Modal/Modal';
import { Dna } from 'react-loader-spinner';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    page: 1,
    gallery: [],
    isLoading: false,
    isListShow: false,
    isLoadMore: false,
    isModal: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.search !== this.props.search) {
      this.setState({ page: 1, gallery: [] });
      if (this.state.page === 1) {
        this.queryImages();
        return;
      }
    }
    if (prevState.page !== this.state.page) {
      this.queryImages();
    }
  }

  queryImages = () => {
    this.setState({ isLoading: true, isLoadMore: false });
    getImages(this.props.search, this.state.page)
      .then(response => {
        if (response.length !== 0) {
          this.setState(prevState => ({
            isLoadMore: true,
            isLoading: false,
            gallery: [...prevState.gallery, ...response],
          }));
        } else if (response.length === 0) {
          Report.failure('No more images to load', 'Okay');
          this.setState({
            isLoadMore: false,
          });
        }
      })
      .catch(error => {
        console.log('error :>> ', error);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleModal = largeImageURL => {
    this.setState({ isModal: largeImageURL });
    console.log(largeImageURL);
  };

  closeModal = () => {
    this.setState({ isModal: null });
  };

  render() {
    const { gallery, isLoadMore, isModal, isLoading } = this.state;

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
                handleModal={this.handleModal}
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
        {isLoadMore && <ButtonLoadMore loadMore={this.loadMore} />}
        {isModal && <Modal largeImage={isModal} closeModal={this.closeModal} />}
      </>
    );
  }
}

export { ImageGallery };

ImageGallery.propTypes = {
  search: PropTypes.string.isRequired,
};
