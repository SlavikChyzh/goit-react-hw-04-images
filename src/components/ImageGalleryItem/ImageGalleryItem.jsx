import PropTypes from 'prop-types';

const ImageGalleryItem = ({ link, title, handleModal, largeImage }) => {
  return (
    <li>
      <img
        src={link}
        alt={title}
        className="ImageGalleryItem-image"
        onClick={() => handleModal(largeImage)}
      />
    </li>
  );
};

export { ImageGalleryItem };

ImageGalleryItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};
