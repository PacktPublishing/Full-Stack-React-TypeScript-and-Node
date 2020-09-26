import React, { FC } from "react";
import RichEditor from "../../editor/RichEditor";
import UserNameAndTime from "./UserNameAndTime";
import ThreadPointsInline from "../../points/ThreadPointsInline";

interface ThreadResponseProps {
  body?: string;
  userName?: string;
  lastModifiedOn?: Date;
  points: number;
  readOnly: boolean;
  userId: string;
  threadItemId: string;
  refreshThread?: () => void;
}

const ThreadResponse: FC<ThreadResponseProps> = ({
  body,
  userName,
  lastModifiedOn,
  points,
  readOnly,
  userId,
  threadItemId,
  refreshThread,
}) => {
  return (
    <div>
      <div>
        <UserNameAndTime userName={userName} lastModifiedOn={lastModifiedOn} />
        {threadItemId}
        <span style={{ display: "inline-block", marginLeft: "1em" }}>
          <ThreadPointsInline
            points={points || 0}
            userId={userId}
            threadItemId={threadItemId}
            refreshThread={refreshThread}
            allowUpdatePoints={true}
          />
        </span>
      </div>
      <div className="thread-body-editor">
        <RichEditor existingBody={body} readOnly={readOnly} />
      </div>
    </div>
  );
};

export default ThreadResponse;
