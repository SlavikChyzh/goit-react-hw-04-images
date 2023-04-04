import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';

export const Modal = ({ closeModal, largeImage }) => {
  const handleKeyESC = useCallback(
    ({ code }) => {
      if (code === 'Escape') closeModal();
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyESC);
  }, [handleKeyESC]);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', handleKeyESC);
    };
  }, [handleKeyESC]);

  const handleClick = ({ target: { nodeName } }) => {
    if (nodeName === 'DIV') closeModal();
  };

  return (
    <div className="Overlay" onClick={handleClick}>
      <div className="Modal">
        <img src={largeImage} alt="big" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
