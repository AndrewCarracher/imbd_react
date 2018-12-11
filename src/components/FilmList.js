import React, { Component } from 'react';
import Film from './Film';

class FilmList extends Component {
  render(){

    const filmNodes = this.props.data.map((film) => {
      return <Film key = { film.id } name = { film.name } url = { film.url }/>
    });

    return (
      <div className = "FilmList">
        <h1>Upcoming Film Releases For Uk</h1>
        { filmNodes }
        <h2><a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases</a></h2>
      </div>
    );
  }
}

export default FilmList;
