import React from "react";
import unSplash from "../api/unSplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unSplash.get("search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID Op55_UrFjiHYALTtsp5NGMy6esgzngEBo-Nyu1aufC4",
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
