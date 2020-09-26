import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { gql, useMutation } from "@apollo/client";
import "./ThreadPointsInline.css";

const UpdateThreadItemPoint = gql`
  mutation UpdateThreadItemPoint(
    $userId: ID!
    $threadItemId: ID!
    $increment: Boolean!
  ) {
    updateThreadItemPoint(
      userId: $userId
      threadItemId: $threadItemId
      increment: $increment
    )
  }
`;

class ThreadPointsInlineProps {
  points: number = 0;
  userId?: string;
  threadId?: string;
  threadItemId?: string;
  allowUpdatePoints?: boolean = false;
  refreshThread?: () => void;
}

const ThreadPointsInline: FC<ThreadPointsInlineProps> = ({
  points,
  userId,
  threadId,
  threadItemId,
  allowUpdatePoints,
  refreshThread,
}) => {
  const [execUpdateThreadItemPoint] = useMutation(UpdateThreadItemPoint);

  const onClickIncThreadItemPoint = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();

    await execUpdateThreadItemPoint({
      variables: {
        userId,
        threadItemId,
        increment: true,
      },
    });
    refreshThread && refreshThread();
  };
  const onClickDecThreadItemPoint = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();

    await execUpdateThreadItemPoint({
      variables: {
        userId,
        threadItemId,
        increment: false,
      },
    });
    refreshThread && refreshThread();
  };

  return (
    <span className="threadpointsinline-item">
      <div
        className="threadpointsinline-item-btn"
        style={{ display: `${allowUpdatePoints ? "block" : "none"}` }}
      >
        <FontAwesomeIcon
          icon={faChevronUp}
          className="point-icon"
          onClick={onClickIncThreadItemPoint}
        />
      </div>
      {points}
      <div
        className="threadpointsinline-item-btn"
        style={{ display: `${allowUpdatePoints ? "block" : "none"}` }}
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          className="point-icon"
          onClick={onClickDecThreadItemPoint}
        />
      </div>
      <div className="threadpointsinline-item-btn">
        <FontAwesomeIcon icon={faHeart} className="points-icon" />
      </div>
    </span>
  );
};

export default ThreadPointsInline;
