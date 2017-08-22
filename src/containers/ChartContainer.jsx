import React from 'react';
import Header from '../components/Header.jsx';
import SongDetails from '../components/SongDetails.jsx';

export default class ChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', () => {
      if(request.status === 200) {
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        console.log(data.feed.entry);
        this.setState({
          songs: data.feed.entry
        })
      }
    });
    request.send();
  }

  render() {
    return (
      <div>
        <Header title="UK Top 20" />
        <SongDetails songs={this.state.songs}/>
      </div>
      );
    }

}