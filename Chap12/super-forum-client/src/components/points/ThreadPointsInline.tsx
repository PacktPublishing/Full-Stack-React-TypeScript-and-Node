import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ThreadPointsBarProps } from "./ThreadPointsBar";

const ThreadPointsInline: FC<ThreadPointsBarProps> = ({
  points,
  responseCount,
}) => {
  return (
    <React.Fragment>
      <label
        style={{
          marginRight: ".75em",
          marginTop: ".25em",
        }}
      >
        {points || 0}
        <FontAwesomeIcon
          icon={faHeart}
          className="points-icon"
          style={{
            marginLeft: ".2em",
          }}
        />
      </label>
    </React.Fragment>
  );
};

export default ThreadPointsInline;
