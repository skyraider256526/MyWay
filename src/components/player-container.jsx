import React from "react";

import { connect } from "react-redux";

import { selectCurrentUrl } from "../redux/playlist.selector";
import { changeCurrentUrl } from "../redux/playlist.action";

import YouTube from "react-youtube";

export const PlayerContainer = ({ currentUrl, dispatch }) => {
  //this will get rendered if no url entered by user
  if (!currentUrl) {
    return (
      <div className="flex-fill text-center pt-5 border border-success">
        Please enter a url
      </div>
    );
  }
  const opts = {
    playerVars: {
      autoplay: 1
    }
  };
  let url = currentUrl.match(/\?v=(.*\w*)|.be\/(\w*)/);
  if (url.pop() === undefined) {
    url = url[1];
  } else {
    //the url contain .be format of youtube url
    url = currentUrl.match(/\?v=(\w*)|.be\/(.*\w*)/).pop();
    console.log("url if .be/", url);
  }
  return (
    <div className="flex-fill">
      <YouTube
        videoId={url}
        opts={opts}
        onReady={event => event.target.playVideo()}
        onEnd={event => {
          console.log(event, "finished", event);
          dispatch(changeCurrentUrl());
        }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  currentUrl: selectCurrentUrl(state)
});

export default connect(mapStateToProps)(PlayerContainer);
