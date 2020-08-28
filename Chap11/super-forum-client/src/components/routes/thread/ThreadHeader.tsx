import React, { FC } from "react";
import { getTimePastIfLessThanDay } from "../../../common/dates";

interface ThreadHeaderProps {
  userName?: string;
  lastModifiedOn: Date;
  title?: string;
}

const ThreadHeader: FC<ThreadHeaderProps> = ({
  userName,
  lastModifiedOn,
  title,
}) => {
  return (
    <div className="thread-header-container">
      <h3>{title}</h3>
      <div>
        <strong>{userName}</strong>
        <label style={{ marginLeft: "1em" }}>
          {getTimePastIfLessThanDay(lastModifiedOn)}
        </label>
      </div>
    </div>
  );
};

export default ThreadHeader;
