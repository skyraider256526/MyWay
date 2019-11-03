import React, { useState } from "react";

import { connect } from "react-redux";

import { removeUrl, moveUrlDown } from "../redux/playlist.action";
import { moveUrlUp } from "../redux/playlist.action";

import { selectUrlList } from "../redux/playlist.selector";

import PlaylistItem from "./playlist-item";

function useForceUpdate() {
  const [value, setValue] = useState(true); //boolean state
  return () => setValue(!value); // toggle the state to force render
}

const Playlist = ({ urlList, removeUrl, moveUrlUp, moveUrlDown }) => {
  const forceUpdate = useForceUpdate();
  //renders a lodding screen if the user has not enterd any url
  if (!urlList.length) {
    return (
      <div
        className=" align-self-stretch vh-100 text-center pt-5 border border-success"
        style={{ minWidth: "100%" }}
      >
        Please enter a url
      </div>
    );
  }
  //if user has entered any url this will get rendered
  return (
    <div
      className=" align-self-stretch vh-100 border border-success"
      style={{ minWidth: "50vw" }}
    >
      <ul className="list-group">
        {urlList.map((url, index) => (
          <PlaylistItem
            key={index}
            forceUpdate={forceUpdate}
            url={url}
            removeUrl={removeUrl}
            moveUrlUp={moveUrlUp}
            moveUrlDown={moveUrlDown}
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  urlList: selectUrlList(state)
});

const mapDispatchToProps = dispatch => ({
  removeUrl: url => dispatch(removeUrl(url)),
  moveUrlUp: url => dispatch(moveUrlUp(url)),
  moveUrlDown: url => dispatch(moveUrlDown(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
