import PropTypes from 'prop-types';

export const ButtonLoadMore = ({ loadMore }) => {
  return (
    <button className="Button" onClick={loadMore}>
      Load More...
    </button>
  );
};

ButtonLoadMore.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
