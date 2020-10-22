import React, { FC } from "react";
import RichEditor from "../../editor/RichEditor";
import UserNameAndTime from "./UserNameAndTime";
import ThreadPointsInline from "../../points/ThreadPointsInline";

interface ThreadResponseProps {
  body?: string;
  userName?: string;
  lastModifiedOn?: Date;
  points: number;
}

const ThreadResponse: FC<ThreadResponseProps> = ({
  body,
  userName,
  lastModifiedOn,
  points,
}) => {
  return (
    <div>
      <div>
        <UserNameAndTime userName={userName} lastModifiedOn={lastModifiedOn} />
        <span style={{ marginLeft: "1em" }}>
          <ThreadPointsInline points={points || 0} />
        </span>
      </div>
      <div className="thread-body-editor">
        <RichEditor existingBody={body} />
      </div>
    </div>
  );
};

export default ThreadResponse;
