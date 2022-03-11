import React, {useEffect, useState} from 'react'
import TracksList from './TracksList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

let api = "http://jonquet/albums/albums/" 

export default function AJAXTracksList({ id }) {
    const [track, setTrack] = useState(null)

    useEffect(() => {
        fetch(`${api}${id}/pistes`)
            .then((resp) => resp.json())
            .then(json => setTrack(json))
    }, [id])

  return (
    <>
    {!track ? <FontAwesomeIcon icon={faSpinner} spin/> :
     <div>
        <TracksList tracks={track}/>
     </div>
     }
  </>
  )
}
