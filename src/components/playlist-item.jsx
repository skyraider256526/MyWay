import React from "react";

const PlaylistItem = ({
  url,
  removeUrl,
  moveUrlUp,
  moveUrlDown,
  forceUpdate
}) => {
  return (
    <React.Fragment>
      <li className="list-group-item position-relative">
        {url}
        <span
          className="d-flex-inline flex-row-reverse position-absolute space-between"
          style={{ right: 0 }}
        >
          <span className="btn-group-sm">
            <span
              className="btn btn-primary"
              onClick={() => {
                moveUrlUp(url);
                forceUpdate();
              }}
            >
              &#8593;
            </span>
            <span
              className="btn btn-primary"
              onClick={() => {
                moveUrlDown(url);
                forceUpdate();
              }}
            >
              &#8595;
            </span>
          </span>
          <span
            className=""
            onClick={event => {
              console.log(removeUrl);

              removeUrl(url);
            }}
          >
            &#10005;
          </span>
        </span>
      </li>
    </React.Fragment>
  );
};

export default PlaylistItem;
