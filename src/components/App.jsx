import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { useState } from 'react';

const App = () => {
  const [searchWorld, setSearchWorld] = useState('');

  const searchbarSubmit = world => {
    setSearchWorld(world);
  };

  return (
    <>
      <Searchbar onSubmit={searchbarSubmit} />
      <ImageGallery searchWorld={searchWorld}></ImageGallery>
    </>
  );
};

export { App };
