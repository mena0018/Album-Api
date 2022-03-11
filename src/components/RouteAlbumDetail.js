import React from 'react'
import { useParams } from 'react-router-dom'

import AJAXAlbumDetail from './AJAXAlbumDetail'
import AJAXTracksList from './AJAXTracksList';


export default function RouteAlbumDetail() {
    let { id } = useParams();

  return (
    <div>
        <AJAXAlbumDetail id={id}/>
        <AJAXTracksList  id={id}/>
    </div>
  )
}
