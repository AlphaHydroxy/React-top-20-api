import React from 'react';

export default class SongDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      details: {}
    }
  }

  render() {
    if(!this.props.songs){
      return null;
    }
    console.log(this.props.songs);
      const songDetails = this.props.songs.map((song, index) => {
        return (
          <div className="song-container" key={index}>
            <h1 className="chart-no">{index + 1}</h1>
            <img src={song["im:image"][2].label} alt={song["im:artist"].label} />
            <h3>{song.title.label}</h3>
            <audio controls>
              <source src={song.link[1].attributes.href} type="audio/m4a" />
            </audio>
          </div>
        );
      });
      return (
          <div id="song-details">
          {songDetails}
          </div>
        );


  }
}