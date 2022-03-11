import AlbumsList from "./AlbumsList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Pager from "./Pager";
import Sorting from "./Sorting";


let api = "https://iut-info.univ-reims.fr/users/jonquet/albums/public/index.php/albums";

class Explorer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      albums: null,
      pager: {
        page:0,
        pagesNumber:1
      },
      isAsc: false,
      sorts: {
        "nom": false,
        "année": false,
        "genre": false,
        "artiste": false,
      },
      selectedSort: "",
    }
    this.onPageChange = this.onPageChange.bind(this);
    this.onChange     = this.onChange.bind(this);
  }

  componentDidMount() {
    this.onPageChange(this.state.pager.page);
  }

  onPageChange(page) {
    if (page < this.state.pager.pagesNumber && page >= 0){ 
      this.fetchAlbums(page)
    }
  }

  fetchAlbums(page,sortName,isAsc) {
    fetch(`${api}?page=${page}&critereTri=${sortName}&triAscendant=${isAsc}`)
    .then((resp) => resp.json())
    .then(json => {
      this.setState({
        albums: json.albums,
        pager: {
          page: json.pagination.page,
          pagesNumber: json.pagination.nombrePages
        }
      })
    });
  }

  onChange(sortName, isAsc) {
    this.setState({
      selectedSort: sortName,
      sorts: {
        ...this.state.sorts,
        [sortName]: isAsc
      }
    })

    this.fetchAlbums(this.state.pager.page, sortName, isAsc)

  }

  
  render() {

    return (
      <>
       <Sorting sorts={this.state.sorts} onChange={this.onChange} 
       disabled={this.state.albums === null}
        selected={this.state.selectedSort} />

        {!this.state.albums ? <FontAwesomeIcon  icon={faSpinner} spin/> :
         <AlbumsList albums={this.state.albums} />}

        {this.state.pager.pagesNumber > 1 &&
            <Pager onPageChange={this.onPageChange}
             pagesNumber={this.state.pager.pagesNumber}
              page={this.state.pager.page} />
        }
      </>
    );  
  }
}

export default Explorer;
