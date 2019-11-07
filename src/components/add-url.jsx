import React from "react";

import { connect } from "react-redux";

import { addUrlToPlaylist } from "../redux/playlist.action";

export const AddUrl = ({ dispatch }) => {
  const ENTER_KRY = 13;
  //urlCheck1 for url copied from the addres bar, with http:// and without
  const urlCheck1 = url =>
    /http:\/\/www.youtube.com\/watch\?v=.\w/.test(url) ||
    /www.youtube.com\/watch\?v=.\w/.test(url);
  //urlCheck2 for url gotten by using sharing option in a video, with http:// and without
  const urlCheck2 = url =>
    /http:\/\/youtu\..\D\/\w/.test(url) || /youtu\..\D\/\w/.test(url);
  //combinig the above two checks
  const urlCheck = value => urlCheck1(value) || urlCheck2(value);
  return (
    <input
      className="border border-success"
      type="text"
      placeholder="enter url here"
      onBlur={event => {
        const value = event.target.value;
        console.log("url Check :", urlCheck(value));
        if (urlCheck(value)) {
          dispatch(addUrlToPlaylist(value));
          event.target.value = null;
          return; //return used to skip the below window.alert()
        } else if (value !== "") {
          window.alert("enter a valid youtube url");
        }
      }}
      onKeyDown={e => {
        if (e.keyCode === ENTER_KRY) {
          const value = e.target.value;
          if (urlCheck(value)) {
            dispatch(addUrlToPlaylist(value));
            e.target.value = null;
          } else if (value !== "") {
            window.alert("enter valid youtube url");
            e.target.value = null;
          }
        }
      }}
    />
  );
};

export default connect()(AddUrl);
