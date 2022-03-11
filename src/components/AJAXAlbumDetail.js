import React, { useState, useEffect } from 'react'
import AlbumDetail from './AlbumDetail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

let api = "http://jonquet/albums/albums/" 

// Version avec UseState car j'ai bien compris comment gérer les states avec une classe
export default function AJAXAlbumDetail({ id }) {

    const [album, setAlbum] = useState(null);

    useEffect(() => {
      fetch(`${api}${id}`)
        .then((resp) => resp.json())
        .then(json => {
          setAlbum(json)
        })
      }, [id])

    return (
      <>
        {!album ? <FontAwesomeIcon icon={faSpinner} spin/> :
         <div>
            <AlbumDetail album={album}/>
         </div>
         }
      </>
    )
}
