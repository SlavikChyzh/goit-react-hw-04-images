import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyESC);
  }

  handleClick = ({ target: { nodeName } }) => {
    if (nodeName === 'DIV') this.props.closeModal();
  };

  handleKeyESC = ({ code }) => {
    if (code === 'Escape') this.props.closeModal();
  };

  render() {
    const { largeImage, title } = this.props;
    return (
      <div className="Overlay" onClick={this.handleClick}>
        <div className="Modal">
          <img src={largeImage} alt={title} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
