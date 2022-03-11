import React from 'react'
import PropTypes from 'prop-types'; 


export default function TrackItem({ track }) {
  
  function msConvertToSec(times) {
      let minutes = Math.floor(times / 60);
      let seconds = ((times % 60) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  
  return (
      <>
        <div className="track">
            <div className="line">Disque : <span> {track.disque} </span></div>
            <div className="line">Numéro : <span> {track.numéro}</span></div>
            <div className="line">Nom :    <span> {track.nom}</span></div>
            <div className="line">Durée :  <span> {msConvertToSec(track.durée)}</span></div>
        </div>
      </>
  
  )
}

TrackItem.propTypes = {
  track: PropTypes.shape({
      nom: PropTypes.string.isRequired,
      disque: PropTypes.number.isRequired,
      numéro: PropTypes.number.isRequired,
      durée: PropTypes.number.isRequired,
  }),
};