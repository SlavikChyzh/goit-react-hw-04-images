import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchWorld: '',
  };

  searchbarSubmit = world => {
    this.setState({ searchWorld: world });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchbarSubmit} />
        <ImageGallery search={this.state.searchWorld}></ImageGallery>
      </>
    );
  }
}
