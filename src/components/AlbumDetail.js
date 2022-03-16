import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


export default function AlbumDetail({ album }) {
    return (
      <>
        <div key={album.id} className="item-album"> 
            <div className="return">
              <Link to="/">
                <div className="return-icon"><FontAwesomeIcon icon={faHome} /> </div>
              </Link>
            </div>
            <div className="titre-album">{album.nom}</div>
            <div className="genre">{album.genre.nom}</div>
            <div className='bottom'>
              <div className="artiste">{album.artiste.nom}</div>
              <div className="annee">{album.année}</div>
            </div>
        </div>
      </>
    )
  
}
