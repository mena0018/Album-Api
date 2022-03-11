import React from 'react';
import PropTypes from 'prop-types'; 
import { Link } from "react-router-dom";


function AlbumItem({ data }) {

let api = "https://iut-info.univ-reims.fr/users/jonquet/albums/public/index.php";

    return (
      <div className="item"> 
        <Link to={"/album/"+data.id}>
          <div className="titre">{data.nom}</div>
          <div className="jaquette"><img src={api+data.jaquette} alt={data.jaquette}/></div>
          <div className='bottom'>
            <div className="artiste">{data.artiste.nom}</div>
            <div className="annee">{data.année}</div>
          </div>
        </Link>
      </div>
    );
}


AlbumItem.propTypes = {
    data: PropTypes.shape({
        nom: PropTypes.string.isRequired,
        jaquette: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        artiste: PropTypes.object.isRequired,
        année: PropTypes.number.isRequired,
    }),
};
  
export default AlbumItem;
  