import PlaylistActionTypes from "./playlist.types";

const INITIAL_STATE = {
  urlList: [],
  currentUrl: null
};

export const UrllistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlaylistActionTypes.ADD_URL_TO_PLAYLIST:
      if (!state.urlList.length) {
        console.log(action.payload);

        return {
          urlList: [action.payload],
          currentUrl: action.payload
        };
      }
      return {
        ...state,
        urlList: [...state.urlList, action.payload]
      };
    case PlaylistActionTypes.CHANGE_CURRENT_URL:
      return {
        urlList: state.urlList.slice(1),
        currentUrl: state.urlList[1]
      };
    case PlaylistActionTypes.REMOVE_URL: {
      let idx = state.urlList.indexOf(action.payload);
      //if the url to remove is the 0th element then we have to change
      //the 'currentUrl' also
      if (!idx) {
        return {
          urlList: state.urlList.slice(1),
          currentUrl: state.urlList[1]
        };
      }
      return {
        ...state,
        urlList: state.urlList.filter(url => url !== action.payload)
      };
    }
    case PlaylistActionTypes.MOVE_URL_UP: {
      let idx = state.urlList.indexOf(action.payload);
      let urlCopy = state.urlList;
      //if the url is 0th then no  change
      if (!idx) {
        return {
          ...state
        };
      }
      //if the url position is 1st then we have to change the 'currentUrl' also
      let temp = urlCopy[idx - 1];
      urlCopy[idx - 1] = action.payload;
      urlCopy[idx] = temp;
      if (idx === 1) {
        return {
          urlList: urlCopy,
          currentUrl: action.payload
        };
      }
      return {
        ...state,
        urlList: urlCopy
      };
    }
    case PlaylistActionTypes.MOVE_URL_DOWN: {
      let idx = state.urlList.indexOf(action.payload);
      let urlCopy = state.urlList;
      //if the url is last then no  change
      if (idx === urlCopy.length - 1) {
        return {
          ...state
        };
      }
      //if the url position is 0th then we have to change the 'currentUrl' also
      let temp = urlCopy[idx + 1];
      urlCopy[idx + 1] = action.payload;
      urlCopy[idx] = temp;
      return {
        currentUrl: temp,
        urlList: urlCopy
      };
    }
    default:
      return state;
  }
};
