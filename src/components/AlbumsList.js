import React from 'react';
import AlbumItem from './AlbumItem';
import PropTypes from 'prop-types'; 


function AlbumsList({albums}) {
  const listAlbums = albums.map( album => 
      <AlbumItem key={album.id} data={album}/>)

  return (
    <div className="list">
      {listAlbums}
    </div>
  );
}

AlbumsList.propTypes = {
  albums: PropTypes.array
};

export default AlbumsList;
  