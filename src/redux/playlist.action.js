import PlaylistActionTypes from "./playlist.types";

export const addUrlToPlaylist = url => ({
  type: PlaylistActionTypes.ADD_URL_TO_PLAYLIST,
  payload: url
});

export const changeCurrentUrl = () => ({
  type: PlaylistActionTypes.CHANGE_CURRENT_URL
});

export const removeUrl = url => ({
  type: PlaylistActionTypes.REMOVE_URL,
  payload: url
});

export const moveUrlUp = url => ({
  type: PlaylistActionTypes.MOVE_URL_UP,
  payload: url
});
export const moveUrlDown = url => ({
  type: PlaylistActionTypes.MOVE_URL_DOWN,
  payload: url
});
