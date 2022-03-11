import React from 'react'
import TrackItem from './TrackItem'
import PropTypes from 'prop-types'; 


export default function TracksList({ tracks }) {
    const listTracks = tracks.map( track => 
        <TrackItem key={track.disque+"-"+track.nom} track={track} />
    )

  return (
      <div className="list-tracks">
           {listTracks}
      </div>
    )
}

TracksList.propTypes = {
    tracks: PropTypes.array
};